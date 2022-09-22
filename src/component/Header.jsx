import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStripe } from "@fortawesome/free-brands-svg-icons"
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons"
import { useNavigate } from "react-router-dom";

const Head = styled.header`
    padding: 1.2rem;
    display: flex;
    justify-content: space-between;
    background-color: #E9EFF3; 

    & a {
        text-decoration: none;
        color: #2d7685;
        padding-top: 1rem;
    }
`;

const Header = () =>{
    let navigate = useNavigate();

    return(
        <Head>
            <FontAwesomeIcon icon={faStripe} color="#2d7685" size="4x" />
            <a href="">
                <FontAwesomeIcon icon={faShoppingCart} size="2x" color="#2d7685"/> 
            </a>
        </Head>
    );
}

export default Header;

