import { useState,useEffect} from 'react'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [jokes,setJokes] = useState([])

  useEffect(()=>{
    axios.get("/api/jokes")
    .then((response)=>{
      setJokes(response.data)
    })
    .catch((error)=>{
      console.log(error)
    })
  })

  return (
    <>
        <h1>
          I am Joker
        </h1>
        <p>Here is my Joke {jokes.length}</p>
        {
          jokes.map((joke,index)=>(
              <div key={joke.id}>
                  <h3>{joke.name}</h3>
                  <h4>{joke.content}</h4>
              </div>
          ))
        }
    </>
  )
}

export default App
