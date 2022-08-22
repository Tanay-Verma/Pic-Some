import { func } from 'prop-types'
import React, { useState, useEffect } from 'react'

// creating this context for the images incoming from the api which will display on home page
const Context = React.createContext()

function ContextProvider({ children }) {
    // in this we will store the incoming images from the api
    const [images, setImages] = useState([])
    const [cartItems,setCartItems] = useState([])

    useEffect(() => {
        // making call to api to fetch the images for dispkaying
        async function fetchData() {
            const res = await fetch("https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json")
            const data = await res.json()
            setImages(data)
        }
        fetchData()
    }, [])
    
    function addItem(newItem){
        setCartItems(prevItems => [...prevItems,newItem])
    }

    console.log(cartItems)

    function toggleFavorite(id) {
        const newArr = images.map(img => {
            if (img.id === id) {
                return {...img, isFavorite: !img.isFavorite}
            }
            return img
        })
        setImages(newArr)
    }

    return (
        <Context.Provider value={{ images, toggleFavorite, addItem, cartItems}}>
            {children}
        </Context.Provider>
    )
}

export { ContextProvider, Context }
