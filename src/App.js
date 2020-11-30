import React from 'react'

import Layout from './components/Layout/index'
import ListOfCharacters from './containers/ListOfCharacters'

import './styles/main.scss'

const App = () => {
  return (
    <Layout>
      <ListOfCharacters />
    </Layout>
  )
}

export default App
