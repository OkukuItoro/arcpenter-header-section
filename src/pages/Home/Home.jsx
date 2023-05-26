import React from "react";
import "./HomeStyles.scss";
import { Hero, Navbar } from "../../components";

const Home = () => {
  return (
    <header className="home">
      <Navbar />
      <Hero />
    </header>
  );
};

export default Home;
