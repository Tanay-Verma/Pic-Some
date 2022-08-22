import React, { useState, useContext } from "react"
import { Context } from "../Context"
import PropTypes from "prop-types"

function Image({ img, className }) {
    // to see if the mouse is hovered over the images 
    const [hovered, setHovered] = useState(false)
    const { toggleFavorite, addItem, cartItems, removeItem} = useContext(Context)

    // these icons are displayed when hovered is flipped to true
    // displays Heart
    const heartIcon = hovered &&
        <i className="ri-heart-line favorite" onClick={() => toggleFavorite(img.id)}></i>

    // displays filled Heart
    const filledHeartIcon = img.isFavorite &&
        <i className="ri-heart-fill favorite" onClick={() => toggleFavorite(img.id)}></i>

    // displays plus for adding to cart  
    const cartIcon = hovered &&
        <i className="ri-add-circle-line cart" onClick={()=> addItem(img)}></i>

    // displays cart when added to cart
    const shoppingCart = cartItems.some(item=>item.id === img.id) &&
        <i className="ri-shopping-cart-fill cart" onClick={()=>removeItem(img)}></i>
    
    return (
        <div className={`${className} image-container`} onMouseEnter={()=>setHovered(true)} onMouseLeave={()=>setHovered(false)}>
            <img src={img.url} className="image-grid" />
            {heartIcon}
            {filledHeartIcon}
            {!shoppingCart && cartIcon}
            {shoppingCart}
        </div>
    )
}

// incoming prop check
Image.propTypes = {
    className: PropTypes.string,
    img: PropTypes.shape({
        id: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        isFavorite: PropTypes.bool
    })
}

export default Image
