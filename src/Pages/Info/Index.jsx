import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import GridCards from "../../components/GridCardsInfo/GridCardsInfo";

import "./TelaInfo.css";

const TelaInfo = ({ socket }) => {  
  return (
    <>
      <Header icon="home" title="Home" />
        <div className="containerTelaInfo">
          <GridCards />
        </div>
      <Footer />
    </>
  );
};

export default TelaInfo;
