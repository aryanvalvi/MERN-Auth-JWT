import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import CreateAccount from "./Pages/CreateAccount";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
const App = () => {
  return (
    <>
      <Navbar></Navbar>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route
            path="/Create"
            element={<CreateAccount></CreateAccount>}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
