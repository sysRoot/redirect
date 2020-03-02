import React from 'react'
import logo from "./TheHostNinja.png";
import {Link} from "react-router-dom";

const THN = () => {
    return (
        <section>
            <Link to="/to-slip">
                <img src={logo} alt="" />
            </Link>
        </section>
    );
};

export default THN;
