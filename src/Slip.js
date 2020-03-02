import React, { Component } from "react";
import logo2 from "./Slip.png";

class Slip extends Component {
    componentDidMount() {
        setTimeout(function() {
            window.location.href = "https://sliphosting.com";
        }, 3000);
    }
    render() {
        return (
            <section>
                <div class="circles-to-rhombuses-spinner">
                    <div class="circle" />
                    <div class="circle" />
                    <div class="circle" />
                </div>
                <img src={logo2} alt="Slip" />
            </section>
        );
    }
}

export default Slip;
