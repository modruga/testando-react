import { useState } from 'react'
import "./app.css"

import Header from './components/header/Header'
import Home from './components/home/Home'
import About from './components/about/About'

// importação Bootstrap Framework CSS
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Header/>
        <Home/>
      </div>
    </>
  )
}

export default App
