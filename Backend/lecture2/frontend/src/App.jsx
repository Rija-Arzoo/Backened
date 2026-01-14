import { useState } from 'react'
import './App.css'

function App() {
  const [jokes, setJokes] = useState([])

  return (
    <>
      <h1>Frontend of  my app</h1>
      <p>JOKES:{jokes.length}</p>

      {
        jokes.map((joke)=>{
          <div key={joke.id}>
            <h2>{joke.title}</h2>
            <p>{joke.content}</p>
          </div>
        })
      }
    </>
  )
}

export default App
