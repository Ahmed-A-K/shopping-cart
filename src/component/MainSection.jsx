import React from "react";
import styled from "styled-components";
import ProductCard from "./ProductCard";
import ImageHoodie from "../assets/Hoodie.jpg";
import ImageTShirt from "../assets/T-shirt.jpg";
import { useState } from "react";

import CheckOut from "./CheckOut";


const MainContent = styled.section`
    background-color: #E3DDCC;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.5em 1rem;

    & div:last-child button {
        background-color: #CACDBA;
        padding: 0.8rem 0.5rem;
        border: 0.188rem solid #E9EFF3;
        transition: all 0.35s ease-in-out;
        border-radius: 0.2rem;

        &:hover {
            color: white;
            background-color: #9fa18e;
        }

    }

    @media (max-width: 390px) {
        flex-direction: column;
    }

`;

const MainSection = () => {
    const [newProd, setNewProd] = useState([]);
    const [showChekout, setShowCheckout] = useState(false);
    let [bill, setBill] = useState(0);

    const handleShowCheckOut = (show) => {
        updateAddToBill();
        setShowCheckout(show)
    }

    const deleteItem = (e) => {
        let temp = newProd;
        let amount = 0;
        temp.splice(e.target.value, 1)
        setNewProd([...temp]);

        newProd.forEach(element => {
            amount = amount + element.productPrice;
        });
        setBill(amount);
        // updateSubtractFromBill(tempPrice);
    }

    const updateProductList = (name, price) => {
        setNewProd((prevState) =>
            [...prevState, {
                productName: name,
                productPrice: price,
            }]);
    }

    const updateAddToBill = () => {  //this is not working becuase newProd has not been set yet think of some other way.
        let amount = 0;
        newProd.forEach(element => {
            amount = amount + element.productPrice;
        });
        setBill(amount);

    }

    // const updateSubtractFromBill = (price) => {
    //     setBill(bill-= price);
    //     console.log(bill);
    // }


    return (
        <>
            <MainContent>
                <ProductCard name="Black Hoodie" price={1200} imgSrc={ImageHoodie} altText="Hoodie" clickFun=
                    {updateProductList.bind("Black Hoodie", "Black Hoodie", 1200)} />
                <ProductCard name="T-shirt" price={1000} imgSrc={ImageTShirt} altText="T-shirt" clickFun={updateProductList.bind("T-shirt", "T-shirt", 1000)} />
                <div>
                    <button onClick={() => handleShowCheckOut(true)} >Go To Cart</button>
                </div>
                {
                    showChekout && <CheckOut products={newProd} handleCheckout={handleShowCheckOut} deleteItem={deleteItem}  bill={bill}/>
                }

            </MainContent>
        </>
    );
}

export default MainSection;

