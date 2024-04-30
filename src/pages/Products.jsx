
import { useProductContext } from "../context/ProductContext";


export default function Products(){
    const {products} =useProductContext();
    return(
    <>
        <div className="products">
        <div className="row row-cols-1 row-cols-md-3 g-4">
        {products.map(product => (
            <div className="col" key={product.id}>
                <div className="card">
                <img src={product.thumbnail} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{product.title} </h5>
                    <p className="card-text">{product.description}</p>
                </div>                   
                <div className="text-center mb-2"><button type="button" className="btn btn-primary">add to cart</button></div> 
                </div>
             </div>

        ))}

        </div>

        </div>
    </>
    );

}