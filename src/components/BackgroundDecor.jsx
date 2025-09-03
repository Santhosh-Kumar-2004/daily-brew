import React from "react";
import bean from "../assets/bean.svg";
import "../styles/BackgroundDecor.css";

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
            </div>
            
            {/* <div className="steam steam1"></div>
            <div className="steam steam2"></div> */}

            <div className="blob blob1"></div>
            <div className="blob blob2"></div>

        </>
    );
};

export default BackgroundDecor;
