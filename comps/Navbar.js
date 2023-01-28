import React from 'react'
import Main from './Main'

export default function Navbar() {
    return(
      <div className='hero'>
        <nav>
            <h2 className='logo'>Navbar</h2>
            <ul>
                <li><a href='#'>home</a></li>
                <li><a href='#'>about</a></li>
            </ul>
        </nav>
        <Main className='Main'/>
      </div>
    )
}