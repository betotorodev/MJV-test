import React from 'react'

const Search = ({ filter, onChange }) => {
  return (
    <>
      <label>Search your favorite Character</label>
        <input 
          type="text"
          value={filter}
          onChange={onChange}
          className="search"
        />
    </>
  )
}

export default Search
