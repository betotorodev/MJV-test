import React from 'react'

const Characters = ({ characters }) => {
  return (
    <>
      <div className="characters">
        <img src={characters.image} alt="characters"/>
        <h3>{characters.name}</h3>
      </div>
    </>
  )
}

export default Characters
