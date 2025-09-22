import React from "react";
import bean from "../assets/bean.svg";
import "../styles/BackgroundDecor.css";
import decor1 from "../assets/beans_life.png";
import decor2 from "../assets/coffee_scup.png";
import decor3 from "../assets/coffee_moottai.png";

const BackgroundDecor = () => {
    return (
        <>
            <div className="background-decor">
                <img src={bean} alt="bean" className="bean bean1" />
                <img src={bean} alt="bean" className="bean bean2" />
                <img src={bean} alt="bean" className="bean bean3" />
                <img src={bean} alt="bean" className="bean bean4" />
                <img src={bean} alt="bean" className="bean bean5" />
                <img src={bean} alt="bean" className="bean bean6" />
                <img src={bean} alt="bean" className="bean bean7" />
                <img src={bean} alt="bean" className="bean bean8" />
                <img src={bean} alt="bean" className="bean bean9" />
                <img src={bean} alt="bean" className="bean bean10" />
                <img src={bean} alt="bean" className="bean bean11" />
                <img src={bean} alt="bean" className="bean bean12" />
                <img src={bean} alt="bean" className="bean bean13" />
                <img src={bean} alt="bean" className="bean bean14" />
                <img src={bean} alt="bean" className="bean bean15" />

            </div>
            <div className="scrolling-decor">
                <img src={decor1} alt="decor1" className="decor-img decor1" />
                <img src={decor2} alt="decor2" className="decor-img decor2" />
                <img src={decor3} alt="decor3" className="decor-img decor3" />
            </div>

            {/* <div className="steam steam1"></div>
            <div className="steam steam2"></div> */}

            {/* <div className="blob blob1"></div>
            <div className="blob blob2"></div> */}

        </>
    );
};

export default BackgroundDecor;
