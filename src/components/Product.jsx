import React, { useContext, useState } from "react";
import { CartContext } from "../ContextAPI/CartContext";

const Product = ({ product, cartPage, count, setCount }) => {
    const { cart, setCart } = useContext((CartContext));
    const [productTotal, setProductTotal] = useState(null);

    const AddTotals = () => {
        setProductTotal(product.price + (count + 1))
        setCount(count + 1);
    }

    const RemoveTotal = () => {
        setProductTotal(product.price * (count - 1));
        setCount(count - 1);
    }

    return (
        <div key={product.id}>
            {cartPage ? (
                <div className="products">
                    <h5
                        className="d-flex justify-content-center mt-4 fst-bold"
                        style={{ textAlign: "center" }}>
                        {product.title}
                    </h5> <br />

                    <span>
                        < img className="img" src={product.images[0]} alt="product images" />
                        <h5 className="text-center mb-4 mt-3">${product.price}</h5>
                        {cartPage ? (
                            <div className="countHandler my-4">
                                <button onClick={() => {
                                    if (count > 0) {
                                        RemoveTotal();
                                    }
                                }}>
                                    -
                                </button>

                                <input value={count || 1} />

                                <button onClick={() => {
                                    AddTotals();
                                }}>
                                    +
                                </button>
                            </div>
                        ) : (
                            ""
                        )}
                    </span>

                    <div>
                        {cart.find((item) => item.id === product.id) ? (
                            <button
                                className="remove-cart"
                                onClick={() => {
                                    setCart(cart.filter((c) => c.id !== product.id));
                                }}
                            >
                                Remove From Cart
                            </button>
                        ) : (
                            <button
                                className="add "
                                onClick={() => {
                                    setCart([...cart, product]);
                                }}
                            >
                                Add to Cart
                            </button>
                        )}

                    </div>
                </div>

            ) : (
                <div className="products-home">
                    <h6><span className="badge bg-white text-danger border border-danger mt-2">{product.discount}</span></h6>
                    <h2 className="d-flex justify-content-center mt-2 fst-bold" style={{ textAlign: "center" }}>{product.title}</h2> <br />

                    <h5 className="text-center fst-normal mb-4">
                        ${product.price}
                        <span style={{ textDecoration: 'line-through', color: "gray", fontSize: "19px", paddingLeft: "5px" }}>
                            {product.originalprice}
                        </span>
                    </h5>

                    <div>
                        {cart.find((item) => item.id === product.id) ? (
                            <button
                                className="remove"
                                onClick={() => {
                                    setCart(cart.filter((c) => c.id !== product.id));
                                }}
                            >
                                Remove From Cart
                            </button>
                        ) : (
                            <button
                                className="add "
                                onClick={() => {
                                    setCart([...cart, product]);
                                }}
                            >
                                Add to Cart
                            </button>
                        )}
                    </div>

                    <img className="img" src={product.images[0]} alt="product images" />
                </div>

            )}
        </div>
    )
}

export default Product