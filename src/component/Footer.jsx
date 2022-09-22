import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebook,faInstagram,faTwitter} from "@fortawesome/free-brands-svg-icons";
const Foot = styled.footer`
    padding: 1rem;
    background-color: #E9EFF3;
    color: #2d7685;
    display: grid;
    grid-template-columns: repeat(2,1fr);
    align-content:center;
    text-align: left;

    & div h3 {
        text-decoration-line:underline;
        text-decoration-thickness: 0.2rem;
    }

    & div div a {
        margin:  0 0.5rem;
    }

`;


const Footer = () => {
    return(
        <Foot>
            <div>
                <h3>About Stripe</h3>
                <p>Stripe is a clothing brand and company. Our goal is to deliver modern minimal design, aimed to shorten the decision time for purchasing products. Stripe produces some of the most industry standard apperal, that is guarented to impress any demographic.</p>
                <p>&copy; Copyright Stripe 2020-2023</p>
            </div>
            <div>
                <h3>Social Links</h3>
                <div>
                    <a href=""><FontAwesomeIcon icon={faFacebook} color="#2d7685" size="2x"/></a>
                    <a href=""><FontAwesomeIcon icon={faInstagram} color="#2d7685" size="2x"/></a>
                    <a href=""><FontAwesomeIcon icon={faTwitter} color="#2d7685" size="2x"/></a>
                </div>
            </div>
        </Foot>
    );
}

export default Footer;