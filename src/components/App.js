import React ,{useState , useEffect}from 'react'

function App() {
    const [one ,isOne] = useState([])
    const [two, isTwo] = useState(false)

useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then(res => res.json())
      .then(data => {
        isOne(data)
        isTwo(true)
      })
},[])
console.log(one)

if (!two) return <p>Loading...</p>

  return (
    <div>
      <img src={one.message} alt='A Random Dog' />
    </div>
  )
}

export default App

