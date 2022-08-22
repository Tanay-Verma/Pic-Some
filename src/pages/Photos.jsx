import React,{useContext}from "react"
import Image from "../components/Image"
import {Context} from "../Context"
import { getClass } from "../utils"

function Photos() {
    const {images} = useContext(Context);
    
    const imgElements = images.map((ele,index)=>(
        <Image key={ele.id} img={ele} className={getClass(index)} />
    ))

    return (
        <main className="photos">
            {/* <h1>Images go here</h1> */}
            {imgElements}
        </main>
    )
}

export default Photos