import React, { useState, useEffect } from 'react'

// creating this context for the images incoming from the api which will display on home page
const Context = React.createContext()

function ContextProvider({ children }) {
    // in this we will store the incoming images from the api
    const [images, setImages] = useState([])

    useEffect(() => {
        async function fetchData(){
            const res = await fetch("https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json")
            const data = await res.json()
            return await data
        }
        setImages(prevImages => [...prevImages, fetchData()])
    }, [])
    console.log(images)
    return (
        <Context.Provider value={images}>
            {children}
        </Context.Provider>
    )
}

export { ContextProvider, Context }
