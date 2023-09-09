import React from 'react'

const NewNote = ({noteTitle, setNoteTitle,noteBody, setNoteBody,addNote}) => {
  return (
    <div className='NewNote'>
      <h1>Add Note</h1>
      <form className='NewNoteForm' onSubmit={addNote}>
          <label>Title: </label>
          <input
           type="text"
           required
           value={noteTitle}
           onChange={(e)=> setNoteTitle(e.target.value)}
           />

           <label>Body: </label>
           <textarea
           required
           value={noteBody}
           onChange={(e)=>setNoteBody(e.target.value)}
           >

           </textarea>

            <button type='submit'>Add Note</button>
      </form>
    </div>
  )
}

export default NewNote