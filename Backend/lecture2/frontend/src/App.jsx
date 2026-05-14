import './App.css'
import { useState, useEffect } from 'react'
import axios from 'axios' // A popular library to fetch data


function App() {
  const [jokes, setJokes] = useState([]) // 1. Start with empty array

  useEffect(() => {
    // 2. Fetch data from your Express backend using axios .in axios data is already in json format so no need to parse it.it is in response.data.
    axios.get('/api/jokes') 
      .then((response) => {
        setJokes(response.data) // 3. Store the backend data in state.data is the data from backened and it is an array of objects.
      })
      .catch((error) => {
        console.log(error)
      })
  }, []) // Empty array means: "Only run this once when the app starts"


  return (
    <>
      <h1>Frontend of  my app</h1>
      <p>JOKES:{jokes.length}</p>

      {
        jokes.map((joke)=>{
          return(
          <div key={joke.id}>
            <h2>{joke.title}</h2>
            <p>{joke.content}</p>
          </div>
          )
        })
      }
    </>
  )
}

export default App
