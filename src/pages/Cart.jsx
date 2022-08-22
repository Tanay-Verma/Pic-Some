import React, { useContext, useState } from "react"
import { Context } from "../Context"
import CartItem from "../components/CartItem"

function Cart() {
    const [buttonText, setButtonText] = useState("Place Order")
    const { cartItems, emptyCart } = useContext(Context)
    const cartItemElements = cartItems.map(item => (
        <CartItem key={item.id} item={item} />
    ))

    // simulates an order placement
    function placeOrder() {
        setButtonText("Ordering...")
        setTimeout(() => {
            console.log("Order placed!")
            setButtonText("Place Order")
            emptyCart()
        }, 3000)
    }

    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {cartItemElements}
            <p className="total-cost">Total: {(cartItems.length * 5.99).toLocaleString("en-US", { style: "currency", currency: "USD" })}</p>
            <div className="order-button">
                {cartItems.length>0 ? <button onClick={placeOrder}>{buttonText}</button>:<p>Cart is empty</p>}
            </div>
        </main>
    )
}

export default Cart