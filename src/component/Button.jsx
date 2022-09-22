import React from "react";
import styled from "styled-components";

const Btn = styled.button`
    padding: 0.5rem;
    margin: 0.3rem 0.5rem;
    background: transparent;
    border: 0.188rem solid #E3DDCC;
    border-radius: 0.2rem;
    font-size: 0.8rem;
    cursor: pointer;
    transition: transform 0.35s ease-in-out;


    &:hover {
        background-color:#E3DDCC;
        transform: scale(1.1,1.1);
    }



`;

const Button = (props) => {
    return(
        <Btn onClick={props.clickFnc}>{props.btnText}</Btn>
    );
}

export default Button;