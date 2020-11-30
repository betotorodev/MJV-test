import React, { useState, useEffect } from 'react'

import Characters from '../components/Characters/index'
import Loading from '../components/Loading/index'
import Search from '../components/Search/index'

import useGetData from '../hooks/useGetData'

const ListOfCharacters = () => {
  const [filter, setFilter] = useState('')
  const { data, loading } = useGetData(filter)

  const onChange = e => {
    e.preventDefault()
    setFilter(e.target.value)
  }

  return (
    <>
      <article className="container home">
        <Search  filter={filter} onChange={onChange}/>
        <section className="characters-container">
          {
            loading
              ? <Loading />
              : (
                data?.length === undefined
                  ? <h1>No existe ese personaje</h1>
                  : data?.map(characters => <Characters characters={characters} />)
              )
          }
        </section>
      </article>
    </>
  )
}

export default ListOfCharacters
