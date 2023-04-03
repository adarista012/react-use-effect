import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const url= 'https://api.chucknorris.io/jokes/random'
  const [ joke, setJoke ] = useState([])
  
  const addJoke = () => {
    const response = fetch(url)

    response
    .then((res) => res.json() )
    .then(( data )=> {
      console.log()
        setJoke((e)=>[
          ...e, <div key={data.id} onClick={addJoke} className='container'>{data.value}</div>
        ])
    })
    .catch((err) => console.log(`Error: ${err}`))
  }
  useEffect( () => {
    addJoke()
  },[])
  
  return (
   <>
   <div className='jokes'>
    { joke }
   </div>
   
   </>
  )
}

export default App
