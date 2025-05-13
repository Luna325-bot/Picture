import { useState } from 'react'
import searchBar from './components/searchBar'
import ImageList from '/components/ImageList'
import searchImages from './api'

function App() {
  //searchImage("cars")
  const [images, setImages] = useState([])

  const handleSubmit = async(term) => {
    console.log("Usted esta buscando con: ", term)
    const result = await searchImages(term)
    setImages(result)
  }
  return (
    <>
    <h1>Picture App</h1>
    <searchBar onSubmit={handleSubmit}/>
      <ImageList images={images}/>
    </>
  )
}

export default App