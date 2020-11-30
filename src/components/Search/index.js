import React, {useEffect} from 'react'

const Search = ({ filter, onChange }) => {
    useEffect(() => {
    console.log(filter)
  }, [filter])
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
