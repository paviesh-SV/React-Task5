import React, { useContext, useState } from "react";
import { CartContext } from "../ContextAPI/CartContext";
import Product from "./Product";
import { Link } from "react-router-dom";

function Cart() {
    const { cart } = useContext(CartContext);

    const [productCounts, setProductCounts] = useState(
        cart.reduce((counts, product) => {
            counts[product.id] = 1
            return counts
        }, {})
    )

    const totalPrice = () => {
        let totalPrice = cart.reduce((sum, product) => {
            const productCount = productCounts[product.id];
            const productPrice = product.price

            return sum + productCount * productPrice
        }, 0)

        return totalPrice
    }

    const updateProductCount = (productId, newCount) => {
        setProductCounts((prevCounts) => ({
            ...prevCounts,
            [productId]: newCount,
        }))
    }

    return (
        <div className="text-center">
            <div className="cart-product">
                {cart.map((product) => (
                    <Product
                        key={product.id}
                        product={product}
                        cartPage={true}
                        count={productCounts[product.id]}
                        setCount={(newCount) => updateProductCount(product.id, newCount)}
                    />
                ))}
            </div>

            <div className="Cart cont">
                {cart.length === 0 ? (
                    <div className="container-fluid" style={{ padding: "100px" }}>
                        <ul className="nav border-0 bg-white">
                            <li className="nav-item">
                                <a className="nav-link active" style={{ color: "#212529" }} href="#">
                                    <span
                                        className="mx-2 p-1 px-2 text-white rounded-3 fw-bold"
                                        style={{ backgroundColor: "#212529", border: "2px solid #212529" }}
                                    >
                                        1
                                    </span>
                                    Shopping Cart
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link text-secondary" href="#">
                                    <span className="border border-2 mx-2 p-1 px-2 rounder-3 fw-bold">
                                        2
                                    </span>
                                    CheckOut
                                </a>
                            </li>

                            <li className="nav-item ">
                                <a className="nav-link text-secondary" href="#">
                                    <span className="border border-2 mx-2 p-1 px-2 rounder-3 fw-bold text-secondary">
                                        3
                                    </span>
                                    Review
                                </a>
                            </li>
                        </ul>

                        <div className="NoItems">
                            <p className="my-5 fs-small fw-bold text-secondary">Shopping Cart is Empty</p>
                            <button className="remove-shop mb-5">
                                <Link to="/">Shop Now</Link>
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className="checkout my-5">
                        <h4>Total: ${totalPrice()}</h4>
                        <button>
                            {" "}
                            <Link className="text-white" to="/">
                                Continue Shopping
                            </Link>
                        </button>
                        <button> Checkout</button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Cart