import React from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';

const NotePage = ({notes,deleteNote}) => {
  const {id} = useParams();
  const note = notes.find((note)=> (note.id).toString() === id);

  return (
      <article className='NotePage'>
        <h1>{note.title}</h1>
        <p>{note.date}</p>
        <p>{note.body}</p>
        <div className='Buttons'>
        <button className='Delete' onClick={()=> deleteNote(note.id)}>Delete</button>
        <Link to={`/edit/${note.id}`}>
        <button className='Edit'>Edit</button>
        </Link>
        </div>
      </article>
  )
}

export default NotePage