
import './App.css'
import Cart from './pages/Cart'
import { ProductProvider } from './context/ProductContext'

function App() {
 

  return (
    <>
    <ProductProvider>
     <div className="container ">
      
      {/* <Products> </Products> */}
      <Cart></Cart>

     </div>
     
     </ProductProvider>
    </>
  )
}

export default App
