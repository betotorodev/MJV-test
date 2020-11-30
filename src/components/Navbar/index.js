import React from 'react'

const rick = 'https://lh3.googleusercontent.com/proxy/c7c8m3wC3tUNUzaVDQuLyNuW7hWj41wivahf2hTehiXT01jUpqhRCLwDt2stbNjczoQqRYtDjMxl4OvYHd-tapZSgUZpda5coQKNgYag8_bw07CgIg'

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
