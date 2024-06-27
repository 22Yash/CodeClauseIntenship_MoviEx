import React, { useState } from 'react'
import logo from '../assets/images/MoviEx logo.png'


function Header() {
  const [toggle,setToggel] = useState(false)

 


  return (
   <>
   <section className=' flex justify-center w-full p-10   text-white'>
    <div id="header" className=' '>
    <img src={logo}  className='w-[120px] md:w-[140px] md:ml-[40px] md:mt-[50px] ml-[60px] mt-[20px]' />
   <h4 className='font-sans font-bold text-[40px] '>Movie Explore</h4>  
    </div>
   
  
   
   
   </section>
   
   </>
  )
}

export default Header
