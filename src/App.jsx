import Header from "./components/Header"
import Photos from "./pages/Photos"
import Cart from "./pages/Cart"
import "./App.css"
import {Link,Routes,Route} from "react-router-dom"

function App() {

  return (
    <div >
      <Header />
      <Routes>
        <Route path="/" element={<Photos/>}/>
        <Route path="cart" element={<Cart/>}/>
      </Routes>
    </div>
  )
}

export default App
