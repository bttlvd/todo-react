const addAction = (title) => ({ type: 'ADD', title })
const toggleAction = (id) => ({ type: 'TOGGLE', id })
const removeAction= (id) => ({ type: 'REMOVE', id })

export {
  addAction,
  toggleAction,
  removeAction,
}