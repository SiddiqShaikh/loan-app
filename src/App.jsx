import { useState } from "react";
import "./App.css";
import Home from "./screens/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    //Home main container
    <>
      <Header />
      <Home />
      <Footer />
    </>
  );
}

export default App;
