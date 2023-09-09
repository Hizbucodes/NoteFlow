import React from 'react'

const Footer = () => {
  const currentYear = new Date();
  return (
    <footer className="Footer">
        <h4>
        📆 Copyright © {currentYear.getFullYear()} NoteFlow, Inc. All rights reserved.
        </h4>
    </footer> 
  )
}

export default Footer