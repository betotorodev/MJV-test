import { useEffect, useState } from 'react'

const useGetData = ( filter ) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    console.log(filter)
    setLoading(true)
    fetch(`https://rickandmortyapi.com/api/character/?name=${filter}`)
      .then(res => res.json())
      .then(characters => {
        setData(characters.results)
        setLoading(false)
      })
      .catch(err => console.log(err))
  }, [filter])

  return { data, loading }
}

export default useGetData
