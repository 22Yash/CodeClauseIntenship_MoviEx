import axios from 'axios'
import React, { useState } from 'react'

function Search() {
    const [text,setText] = useState("")
    const [movie,setMovie] = useState([])

    const changeText  = (event) =>{
      setText(event.target.value)
     
    }

    const getMovie = (e)=>{
      e.preventDefault();

      axios.get(`https://omdbapi.com/?s=${text}&apikey=b175cc`)
      .then((response)=>{
        console.log(response);
        setMovie(response.data.Search)
      })
    
    }

  return (
    <>
    <form className='flex justify-center gap-[10px] mt-[10px]' onSubmit={getMovie} >
      <input  type="search" paceholder='searchMovie'
      className='md:w-[500px] md:h-[50px] h-[40px]  rounded-xl p-5 font-semibold text-[20px] '
      aria-label="Search" value={text} onChange={changeText}/>
      <button className="bg-blue-400 w-[70px] rounded-xl" type="submit">Search</button>
    </form>


<div className="conatiner flex justify-center items-center flex-row mt-[40px]  ">
  <div className="grid grid-cols-2 p-[20px] md:grid md:grid-cols-4 gap-[40px]">
  {
    movie.map((value,index)=>{
        return(
          <div className=' md:w-[300px] md:h-[500px] md:rounded-3xl bg-[#005C78]  hover:border-2 border-white shadow-2xl rounded-[20px] md:p-[20px] flex flex-row'>
            <div className="card " >
            <img src={value.Poster} alt=""  className='md:w-[280px] md:p-[0px] w-[240px] p-[20px] '/>
  <div className="card-body md:p-[10px] p-[20px] text-[white]">
  <h3 key={index} className='p-[px] text-[15px] font-semibold'> Title : {value.Title}</h3>
  <h3 key={index} className='p-[px] text-[15px] font-semibold'> Type : {value.Type}</h3>
  <h3 key={index} className='p-[px] text-[15px] font-semibold'> Year : {value.Year}</h3>
  </div>
</div>
 
 
          </div>
  
        );
    })
   }

  </div>
</div>
    
    
    </>
  )
}

export default Search
