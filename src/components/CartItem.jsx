import React, { useContext,useState} from "react"
import { Context } from "../Context"

function CartItem({ item }) {
    const [hovered,setHovered] = useState(false)
    const { removeItem } = useContext(Context)
    
    return (
        <div className="cart-item" >
            <i className={hovered?"ri-delete-bin-fill":"ri-delete-bin-line"} onClick={() => removeItem(item) } onMouseEnter={()=>setHovered(true)} onMouseLeave={()=>setHovered(false)}></i>
            <img src={item.url} width="130px" />
            <p>$5.99</p>
        </div>
    )
}

export default CartItem