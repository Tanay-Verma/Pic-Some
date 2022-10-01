import { func } from 'prop-types'
import React, { useState, useEffect } from 'react'

// creating this context for the images incoming from the api which will display on home page
const Context = React.createContext()

function ContextProvider({ children }) {
    // in this we will store the incoming images from the api
    const [images, setImages] = useState([])
    const [cartItems,setCartItems] = useState([])

    // making call to api to fetch the images for displaying
    useEffect(() => {
        async function fetchData() {
            const res = await fetch("https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json")
            const data = await res.json()
            setImages(data)
        }
        fetchData()
    }, [])
    
    // adds item to the cartItems array
    function addItem(newItem){
        setCartItems(prevItems => [...prevItems,newItem])
    }

    // removes item from the cartItems array
    function removeItem(currItem){
        setCartItems(prevItems => prevItems.filter(item=> item.id !== currItem.id))
    }

    function emptyCart(){
        setCartItems([])
    }

    // toggle the heart on images on and off
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
        <Context.Provider value={{ images, toggleFavorite, addItem, cartItems, removeItem, emptyCart}}>
            {children}
        </Context.Provider>
    )
}

export { ContextProvider, Context }
