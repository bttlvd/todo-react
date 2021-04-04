import { createStore } from 'redux'

const baseElement = { id: undefined, title: undefined, finished: false }

const reducers = function(state = { todos: [] }, action) {
  switch (action.type) {
    case 'ADD': {
      const maxID = state.todos.length
        ? Math.max(...state.todos.map(({ id }) => id))
        : 0
      const newElement = { ...baseElement, title: action.title, id: maxID + 1 }

      const updatedTodos = [newElement, ...state.todos]
      return { todos: updatedTodos }
    }
    case 'REMOVE': {
      const updatedTodos = state.todos.filter(({ id }) => action.id !== id)
      return { todos: updatedTodos }
    }
    case 'TOGGLE': {
      const updatedTodos = state.todos.map((item) => {
        if (item.id === action.id) 
          item.finished = !item.finished
        return item
      })
      return { todos: updatedTodos }
    }
    default: return state
  }
}

const store = createStore(reducers)

export default store