import './NewTodo.scss'

import { useState } from "react"

export default function NewTodo({ onSubmit }) {
  const [name, setName] = useState('')
  const [error, setError] = useState(false)

  const handleFormSubmit = (event) => {
    event.preventDefault()
    if (!name) {
      setError(true)
      return
    }
    onSubmit(name)
    setName('')
  }

  const handleChange = (e) => {
    setName(e.target.value)
    setError(false)
  }

  const inputClasses = ['new-todo__input']
  if (error) {
    inputClasses.push('error')
  }

  return (
    <form className="new-todo" onSubmit={handleFormSubmit}>
      <input
        value={name}
        className={inputClasses.join(' ')}
        onChange={handleChange}
        placeholder="Что будем делать сегодня?"
      />
      <button className="new-todo__add">Добавить</button>
    </form>
  )
}