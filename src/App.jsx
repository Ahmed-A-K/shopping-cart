import React from "react";
import Header from "./component/Header";
import MainSection from "./component/MainSection";
import Footer from "./component/Footer";
import {Route,Routes} from "react-router-dom";
import CheckOut from "./component/CheckOut";


function App() {

  return (
    <div className="App">
      <Header />
      <MainSection />
      <Footer />
      <Routes>
        <Route  path="/" element={null}/>
        <Route path="/CheckOut" element={<CheckOut />}/>
      </Routes>
    </div>

  )
}

// https://www.schemecolor.com/dulled-down.php

export default App
