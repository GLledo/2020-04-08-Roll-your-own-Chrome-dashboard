import React from 'react'
import useFetch from './hooks/useFetch'

const Home = () =>{

  const {data,loading} = useFetch(`https://source.unsplash.com/random/1920x1080`)

  console.log(data)

  return(

    loading ?
   
    <div>loading photo ...</div> 

    :
    
    <>
      <img src={data} alt="Home img"></img>
    </>

  )
}

export default Home;