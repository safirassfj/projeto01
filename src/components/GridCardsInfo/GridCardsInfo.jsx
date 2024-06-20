import { useState, useEffect } from "react";
import Card from "../CardHome/CardHome";
import "./GridCardsInfo.css";

const GridCards = () => {
  return (
    <div className="containerCards"> 
      <div className="grid">
        <div className="primeiraLinha">
        <Card
              title={ "Alguma coisa"}
              value={ "alguma coisa que complemente alguma coisa de cima " }
              info={"de novo mais alguma coisaaaaaa"}
            ></Card>
            <Card
              title={ "Alguma coisa"}
              value={ "alguma coisa que complemente alguma coisa de cima " }
              info={"de novo mais alguma coisaaaaaa"}
            ></Card>
            <Card
              title={ "Alguma coisa"}
              value={ "alguma coisa que complemente alguma coisa de cima " }
              info={"de novo mais alguma coisaaaaaa"}
            ></Card>
        </div>
      </div>
    </div>
  );
};

export default GridCards;
