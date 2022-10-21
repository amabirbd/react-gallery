import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../app/store'
import ImageCard from './card/ImageCard'

export default function Home() {

  const isAuthenticated = useSelector((state: RootState) => state.login.isAuthenticated)


  return (
    <>
      {
        !isAuthenticated 
          ? <h1 className="text-3xl font-bold underline">Hello World</h1>
          : <ImageCard />

      }
      

    
    </>
  )
}
