import React from 'react'
import {Link} from 'react-router-dom';

const Nav = ({search, setSearch}) => {
  return (
    <div className='Nav'>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/note'>New Note</Link></li>
        <li><Link to='/about'>About</Link></li>
      </ul>

      <form className='NavForm'>
        <input
         type="text"
         placeholder='Search note'
         id='searchNote'
         value={search}
         onChange={(e)=>setSearch(e.target.value)}
         />
      </form>
    </div>
  )
}

export default Nav