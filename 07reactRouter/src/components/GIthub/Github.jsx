import React, { useState, useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {
  const data = useLoaderData()
  // const [data, setData] = useState([])
  // useEffect(()=>{
  //   fetch("https://api.github.com/users/SKELETONOP")
  //   .then(res => res.json())
  //   .then(data => {
  //     console.log(data)
  //     setData(data)
  //   })
  // },[])
  return (

    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github Name : {data?.name}
    <img src={data?.avatar_url} alt='Profile Pic' width={300}></img>
    </div>

  )
}

export default Github

export const githubInfoLoader = async() => {
  const res = await fetch("https://api.github.com/users/SKELETONOP")
  return res.json()
}