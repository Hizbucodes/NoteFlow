import { useEffect, useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Missing from './components/Missing';
import About from './components/About';
import { Route, Routes, useNavigate } from 'react-router-dom';
import NewNote from './components/NewNote';
import {format} from 'date-fns'
import NotePage from './components/NotePage';
import EditNote from './components/EditNote';
import {HelmetProvider} from 'react-helmet-async'
import { Helmet } from 'react-helmet-async';

function App() {
  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem('note')) || []);

  const[search, setSearch] = useState('');
  const[searchResult, setSearchResult] = useState([]);
  const[noteTitle, setNoteTitle] = useState('');
  const[noteBody, setNoteBody] = useState('');
  const[editTitle, setEditTitle] = useState('');
  const[editBody, setEditBody] = useState('');
  const navigate = useNavigate();

  useEffect(()=>{

    const filterSearch = notes.filter((note)=> 
      ((note.title).toLowerCase()).includes(search.toLowerCase())
       ||
      ((note.body).toLowerCase()).includes(search.toLowerCase()));
    
    setSearchResult(filterSearch.reverse());
    localStorage.setItem('note', JSON.stringify(filterSearch));
  },[notes, search]);

  const addNote = (e) => {
    e.preventDefault();
    const id = notes.length ? notes[notes.length - 1].id + 1 : 1;
    const date = format(new Date(), 'MMMM dd, yyyy, pp');
    const newNote = {id, title:noteTitle,date, body:noteBody}
    const allNotes = [...notes, newNote];
    setNotes(allNotes);
    setNoteTitle('');
    setNoteBody('');
    navigate('/')
    localStorage.setItem('note', JSON.stringify(allNotes));
  }


  const deleteNote = (id) => {
    const deleteNotes = notes.filter((note)=> note.id !== id);
    setNotes(deleteNotes)
    navigate('/')
    localStorage.setItem('note', JSON.stringify(deleteNotes));
  }


  const editNote = (id) => {
    const date = format(new Date(), 'MMMM dd, yyyy, pp');
    const updateNote = {id, title:editTitle, body:editBody, date};
    setNotes(notes.map(note=> note.id === id ? {...updateNote} : note))
    setEditBody('');
    setEditTitle('');
    navigate('/');
    localStorage.setItem('note', JSON.stringify(updateNote));
  }

  return (
    <HelmetProvider>
   <div className="App">
   <Helmet>
        <title>NoteFlow | Effortless Note-Taking Mastery</title>
      </Helmet>
      <Header title = "NoteFlow:"/>
      <Nav
        search = {search}
        setSearch = {setSearch}
      />
      <Routes>
        <Route path='/' element={<Home
        notes = {searchResult}
      />}/>
      <Route path='/note'>
        <Route index element={<NewNote noteTitle={noteTitle}
          setNoteTitle={setNoteTitle} noteBody={noteBody} setNoteBody={setNoteBody} addNote={addNote} 
        />}/>
        <Route path=':id' element={<NotePage notes={notes} deleteNote={deleteNote}/>}/>
      </Route>
        <Route path='/edit/:id' element={<EditNote editNote={editNote}
        editTitle={editTitle} editBody={editBody} setEditTitle={setEditTitle} setEditBody={setEditBody} notes={notes}/>}/>
      <Route path='*' element={<Missing/>}/>
      <Route path='/about' element={<About/>}/>
      </Routes>

      <Footer/>
   </div>
   </HelmetProvider>
  );
}

export default App;
