import React from 'react'

const Twitter = 'https://assets.stickpng.com/images/580b57fcd9996e24bc43c53e.png'
const Github = 'https://img2.freepng.es/20180622/pof/kisspng-github-computer-icons-icon-design-desktop-wallpape-5b2dbc1937a659.564564351529723929228.jpg'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <a href="https://twitter.com/betotorodev">
          <div className="social">
            <div className="social-image">
              <img src={Twitter} alt="Twitter"/>
            </div>
            <p>@betotorodev</p>
          </div>
        </a>
        <a href="https://github.com/betotorodev/MJV-test">
          <div className="social">
            <div className="social-image">
              <img src={Github} alt="Github"/>
            </div>
            <p>Repo</p>
          </div>
        </a>
      </div>
    </footer>
  )
}

export default Footer
