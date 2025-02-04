import React from "react";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-secondary ">
            <div className="container-fluid d-flex ">
                <a className="navbar-brand text-white " href="#" ><strong>Start Bootstrap</strong></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse text-lg-end text-start" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active text-white" aria-current="page" href="#"><strong>Home</strong></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#">About</a>
                        </li> <li className="nav-item">
                            <a className="nav-link text-white" href="#">Service</a>
                        </li> 
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#">Contact</a>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;