import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './App.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <div className="card-container">
    <div className="item-container">
      <div className="img-container" >
        <img src="https://i.discogs.com/LKsEGOuYulSjClmF2FXEbHkw_GNTxacrXoK-nrCBVQQ/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTgzMzMy/OTgtMTQ1OTU0ODk2/OC02MDIzLmpwZWc.jpeg" />
      </div>
      <div className="name-container">
        <h1>Rozes</h1>
        <p>Under the grave (2006)</p>
      </div>
    </div>
    <div className="rating-card">
      <p>Rate this album</p>
    </div>
  </div>

    </>
  )
}

export default App
