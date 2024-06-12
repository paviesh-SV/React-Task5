import React from "react";

function Footer() {
    return (
        <footer className="bg-danger py-5">
            <div className="container text-center">
                <p className="m-0 text-center text-white">
                    Registered ®️ {new Date().getFullYear()}
                </p>
            </div>
        </footer>
    )
}

export default Footer