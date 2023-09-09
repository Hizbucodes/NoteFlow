import React from 'react'

const Header = ({title}) => {
  return (
    <div className='Header'>
      <h2><span className='title'>{title}</span> <span style={{opacity: '0.8',color: '#999'}}>Effortless Note-Taking Mastery</span></h2>
    </div>
  )
}

export default Header