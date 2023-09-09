import React from 'react'
import NoteFeed from './NoteFeed'
import { ReactComponent as Logo }from '../assets/add.svg';

const Home = ({notes}) => {
  return (
    <main className='Body'>
      
        {notes.length ? 
        (
          <NoteFeed notes={notes}/>
        ):
        
        (
          <>
          <Logo/>
          <h3>
          It looks like you're ready to start taking notes. 📝 Go ahead and create your first note by tapping the 'New Note' button above. We're here to help you capture your thoughts and ideas!

          Happy note-taking!
          </h3>
        </>
        )}  

    </main>
  )
}

export default Home