import React, {useEffect} from "react";
import styled from "styled-components";


const CheckOutOverlay = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    top:0;
    left: 0;
    right:0;
    bottom:0;
    background-color: rgba(0,0,0,0.5);
    z-index: 2;
    cursor: pointer;
`;

const CheckOutDiv = styled.div`   
    position: absolute;
    padding: 1rem;
    margin: 0.6rem;
    width: 50%;
    text-align: left;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background-color: #E3DDCC;

    & .price-section { 
        display: flex;
        justify-content: center;
        
        & p {
            font-size: 1.5rem;
        }

    }

    & .exit-btn {
        display: flex;
        justify-content: center;
        margin:1rem 0;
        margin-top: 1.2rem;

        & button {
            padding: 0.8rem 1.8rem!important;
            background-color: transparent;
            border:2px solid #9fa18e;
            transition: all 0.5s ease;
            &:hover {
                background-color: #9fa18e;
                color: white;
                border-radius: 0.5rem;
            }
        }
    }

    
    @media (max-width:390px){
        & .price-section p {
            font-size: 1.25rem;
        }
    }
`;

const CheckoutItems = styled.div`
    padding: 0.5rem;
    background-color: white;
    border-radius: 1rem;
    margin-bottom: 0.5rem;
    display: flex;
    justify-content: space-between;

    & div:first-child {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    & div:last-child {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    & div:last-child button {
        border: none;
        background-color: transparent;
        color: violet;

        &:hover {
            color: red;
            cursor: pointer;
        }
    }

    & div h6 {
        font-size: 1.2rem;
        margin: 0;
    }
    
    & div p {
        font-size: 1rem;
        margin: 0;
    }

    & div input {
        background-color: transparent;
        color: transparent;
        border: none;
        transform: translate(15px);
        padding-left:0;
    }

    & div label {
        font-size: 1rem;
        color: red;
    }
`;


const CheckOut = ({products,handleCheckout,deleteItem, bill}) => {
    // useEffect(() => {
    //     console.log("The Total amount is : ", {bill});   
    // })
    return(
        <>
            <CheckOutOverlay>
                <CheckOutDiv>
                    {
                        products?.map((value,i)=> {
                            return(
                                <CheckoutItems key={i}>
                                    <div>
                                        <h6>{value.productName}</h6>
                                        <p>{value.productPrice}</p>
                                    </div>
                                    <div>
                                        <input type="button" value={i} onClick={deleteItem}/>
                                        <label>&#10006;</label>
                                    </div>
                                </CheckoutItems>
                            );
                        })
                    }
                    <div className="price-section">
                        <p>Your total bill is Rs.{bill}</p>
                    </div>
                    <div className="exit-btn">
                        <button onClick={() =>handleCheckout(false)}>Exit</button>
                    </div>
                </CheckOutDiv>
            </CheckOutOverlay>
        </>
    );
}


export default CheckOut;
