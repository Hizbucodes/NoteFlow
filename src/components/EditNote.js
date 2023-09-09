import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const EditNote = ({editTitle, setEditTitle,editBody, setEditBody,editNote, notes}) => {
    const {id} = useParams();
    const note = notes.find((note)=> (note.id).toString() === id);

            useEffect(()=>{
                if(note){
                setEditTitle(note.title);
                setEditBody(note.body);
                }
            },[note, setEditTitle, setEditBody]);
        
    
  return (
    
    <div className='NewNote'>
      <h1>Add Note</h1>
      <form className='NewNoteForm' onSubmit={(e)=> e.preventDefault()}>
          <label>Title: </label>
          <input
           type="text"
           required
           value={editTitle}
           onChange={(e)=> setEditTitle(e.target.value)}
           />

           <label>Body: </label>
           <textarea
           required
           value={editBody}
           onChange={(e)=>setEditBody(e.target.value)}
           >

           </textarea>

            <button type='submit' onClick={()=>editNote(note.id)}>Add Note</button>
      </form>
    </div>
  )
}

export default EditNote