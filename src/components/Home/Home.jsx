import React from "react";
import BtnQRCreat from "../BtnLink/BtnQRCreat";
import BtnDocCreat from "../BtnLink/BtnDocCreat";
import BtnQRRead from "../BtnLink/BtnQRRead";
import BtnDocRead from "../BtnLink/BtnDocRead";
import BtnLinkedin from "../BtnLink/BtnLinkedin";
import BtnGithub from "../BtnLink/BtnGithub";
import './Home.css';

const Home = () => {
    return (
        <div className="BtnHomeContent">
            <BtnQRCreat />
            <BtnDocCreat />
            <BtnQRRead />
            <BtnDocRead />
            <div className="BtnLinkBottom">
                <BtnLinkedin />
                <BtnGithub />
            </div>
        </div>
    );
};

export default Home;