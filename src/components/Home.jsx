import React, { useContext } from "react";
import Product from "./Product";
import { CartContext } from "../ContextAPI/CartContext";

function Home() {
    const {products} = useContext(CartContext);

    return(
        <div className="productWrapper">
            {products.map((product) => (
                <Product key={product.id} product={product} />
            ))}
        </div>
    )
}

export default Home