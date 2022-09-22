import React from "react";
import styled from "styled-components";
import Button from "./Button";

const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #CACDBA;
    height: 22rem;
    width: 13.25rem;
    margin: 1rem;
    overflow: hidden;

    &:has(div) {
        border-radius:1rem;
    }

    & .picture {
        width: 100%;
        height: 70%;
        object-fit:cover;
        & img {
            object-fit: fill;
            height: 100%;
            width: 100%;
        }

    }

    & .btn {
        width: 100%;
        height: 30%;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        
        & p {
            padding: 0;
            margin: 0.1rem;
            font-size: 0.9rem;
        }
    } 
`;



const ProductCard = (props) => {

    return(
        <Card>
            <div className="picture">
                <img src={props.imgSrc} alt={props.altText} />
            </div>
            <div className="btn">
                <p>{props.name}</p>
                <p>Rs.{props.price}</p>
                <Button primary btnText="Add To Cart" clickFnc={props.clickFun}/>
            </div>
        </Card>
    );
}


export default ProductCard;