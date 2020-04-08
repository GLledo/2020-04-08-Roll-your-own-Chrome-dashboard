import { useState, useEffect } from 'react';

const useFetch = url => {

    const [loading, setLoading] = useState(true)
    const [data, setData] = useState(null)

    useEffect(() => {
        async function fetchData() {
          try{
            const response = await fetch(url)
            console.log(response)
            setData(response.url)
            setLoading(false)
          } catch (e){
            console.log(e)
          }
        }
        fetchData()
  
    },[url])
  
    return {data,loading}
}

export default useFetch