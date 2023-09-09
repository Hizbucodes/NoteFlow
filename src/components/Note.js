import React from 'react'
import { Link } from 'react-router-dom'

const Note = ({note}) => {
  return (
    <article className='Note'>
      <Link to={`/note/${note.id}`}>
        <h1>{note.title}</h1>
        <p>{note.date}</p>
      </Link>
        <p>{(note.body).length <= 25 ? note.body : `${(note.body).slice(0,25)}....`}</p>
    </article>
  )
}

export default Note