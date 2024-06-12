import React, {createContext, useEffect, useState} from "react";
import axios from "axios";


const CartContext = createContext();

const CartProvider = ({children}) => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        axios.get("/mocks/Data.json")
            .then((response) => setProducts(response.data.products))
            .catch((error) => console.log(error))
    }, [])

    return (
        <>
            <CartContext.Provider value={{products, setCart, cart}}>
                {children}
            </CartContext.Provider>
        </>
    )
}

export { CartContext, CartProvider}