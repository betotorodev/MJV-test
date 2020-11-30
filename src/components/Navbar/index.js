import React from 'react'

const rick = 'https://img.pngio.com/rick-png-png-group-romolagaraiorg-915_874.png'

const Navbar = () => {
  return (
    <header>
      <nav className="container navigation">
        <ul>
          <li>
            <a href="/">
              <div>
                <img src={rick} alt="rick"/>
              </div>
              <p>The Rick and Morty App</p>
            </a>
          </li>
          <li>
            MJV test
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
