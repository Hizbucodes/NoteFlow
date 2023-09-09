import React from 'react'
import Note from './Note'

const NoteFeed = ({notes}) => {
  return (
    <>
      {notes.map((note) =>(
        <Note key={note.id} note={note}/>
      ))}
    </>
  )
}

export default NoteFeed