// import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from "./pages/Signin";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";
import Home from "./pages/Home"; // Make sure to provide the correct path to Home
import Header from "./components/Header";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<Signin />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/sign-up" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}
