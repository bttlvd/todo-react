import './Todos.scss'

import { useSelector, useDispatch } from 'react-redux'

import Todo from '../Todo/Todo'
import NewTodo from '../NewTodo/NewTodo'

import {
  addAction,
  toggleAction,
  removeAction,
} from '../../store/actions-creator'

export default function TodosList() {
  const dispatch = useDispatch()

  let todos = useSelector((state) => state.todos)

  const toggleItem = (id) =>
    dispatch(
      toggleAction(id)
    )
  const addItem = (title) => 
    dispatch(
      addAction(title)
    )
  const removeItem = (id) => 
    dispatch(
      removeAction(id)
    )

  const Todos = todos.map((item) => 
    <Todo
      key={item.id}
      item={item}
      handleChange={toggleItem}
      handleRemove={removeItem}
    />
  )

  const EmptyList = <div className="empty-list" />

  return (
    <div>
      <h1 className="title">Todos list</h1>
      <NewTodo onSubmit={addItem} />
      <div className="todos">
        {todos.length ? Todos : EmptyList}
      </div>
    </div>
  )
}