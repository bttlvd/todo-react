import { useSelector } from 'react-redux'
import './Header.scss'

export default function Header() {
  let incompleted = useSelector((state) => 
    state.todos.filter(({ finished }) => !finished)).length

  return (
    <header className="header">
      <h1 className="title">ToDo App</h1>
      { incompleted ? <span className="incompleted">🗓 {incompleted}</span> : null }
    </header>
  )
}