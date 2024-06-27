import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'


import Search from './components/Search'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <section className='w-full bg-gradient-to-t from-violet-900 to-gray-900 min-h-screen'>
     <Header/> 
   
    <Search/> 
    </section>
    
    
    </>
  )
}

export default App
