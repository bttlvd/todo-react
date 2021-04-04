import './Todo.scss'

export default function Todo({ item, handleChange, handleRemove }) {
  const classNames = ['todo-item']

  if (item.finished) {
    classNames.push('completed')
  }

  return (
    <label className={classNames.join(' ')}>
      <input
        checked={item.finished}
        onChange={() => handleChange(item.id)}
        className="todo-item__check"
        type="checkbox"
      />
      <span className="todo-item__label">{item.title}</span>
      <button 
        className="todo-item__remove"
        onClick={() => handleRemove(item.id)
      }>
        Удалить
      </button>
    </label>
  )
}