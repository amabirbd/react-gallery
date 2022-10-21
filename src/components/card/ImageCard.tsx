import React from 'react'

import images from "../../data/images.json"

function ImageCard() {

    console.log(images);
    
  return (
    <>
        <h1 className="text-3xl font-bold underline mb-10">Images</h1>
        <div className="grid grid-cols-4 gap-4">
            {
                images.map((image) => (
                    <div>
                        <img src={image} alt="i"/>
                    </div>
                ))
            }
        </div>
    </>
    
  )
}

export default ImageCard