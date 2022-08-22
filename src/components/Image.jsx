import React, { useState } from "react"

function Image({ img, className }) {
    // to see if the mouse is hovered over the images 
    const [hovered,setHovered] = useState(false)

    // changes the hovered state based on if the mouse is on top of images
    const handleHover = ()=>{
        setHovered(!hovered)
    }

    // these icons are displayed when hovered is flipped to true
    const heartIcon = hovered && <i className="ri-heart-line favorite"></i>
    const cartIcon = hovered && <i className="ri-add-circle-line cart"></i>

    return (
        <div className={`${className} image-container`}>
            <img src={img.url} className="image-grid" onMouseEnter={handleHover} onMouseLeave={handleHover}/>
            {heartIcon}
            {cartIcon}
        </div>
    )
}

export default Image
