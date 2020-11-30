import React, { useEffect, useState } from 'react'

import Characters from '../components/Characters/index'
import Loading from '../components/Loading/index'

const ListOfCharacters = () => {
  const [data, setData] = useState([])
  const [filter, setFilter] = useState('')
  const [loading, setLoading] = useState(false)

  const onChange = e => {
    e.preventDefault()
    setFilter(e.target.value)
  }

  useEffect(() => {
    setLoading(true)
    fetch(`https://rickandmortyapi.com/api/character/?name=${filter}`)
      .then(res => res.json())
      .then(characters => {
        setData(characters.results)
        setLoading(false)
      })
      .catch(err => console.log(err))
  }, [filter])

  return (
    <>
      <article className="container home">
        <input 
          type="text"
          value={filter}
          onChange={onChange}
          className="search"
        />
        <section className="characters-container">
          {
            loading
              ? <Loading />
              : data?.map((character) => <Characters characters={character}/>)
          }
          {
            !loading && data?.length === 0 &&
              <h1>No existe ese personaje :/</h1>
          }
        </section>
      </article>
    </>
  )
}

export default ListOfCharacters
