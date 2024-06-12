import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../ContextAPI/CartContext";
import { ShoppingCart } from "phosphor-react";

function Header() {
    const { cart } = useContext(CartContext);

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
            <div className="container px-4 px-lg-4">
                <a className="navbar-brand" href="#">
                    <Link className="text-black" to="/">
                        <img
                            src="https://www.svgrepo.com/show/216601/devices-electronics.svg"
                            alt="icon"
                            style={{ width: "40px", height: "40px" }}
                        />
                    </Link>
                </a>

                <ul className="navbar-nav ms-auto mb-lg-0 mx-4 fs-5">
                    <li className="nav-item">
                        <Link className="text-black" style={{ fontWeight: "bold" }} to="/">
                            SHOP
                        </Link>
                    </li>
                </ul>

                <Link className="text-black" to="/cart">
                    <ShoppingCart size={32} style={{ color: "#222222" }} />

                    <span
                        className="postion-absolute top-0 start-100 translate-middle badge  text-white rounded-pill"
                        style={{ backgroundColor: "#dc3545" }}
                    >
                        {cart.length}
                    </span>

                </Link>
            </div>
        </nav>
    )
}

export default Header