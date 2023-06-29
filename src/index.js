import React from "react";
import ReactDom from "react-dom/client";
import "./index.css";
import  CreditCards  from "./components/CreditCards.jsx";
import { cards} from "./components/CreditCards";
const root = ReactDom.createRoot(document.getElementById("root"));

function app() {

 
  return (
    <div className="EstilosTarjeta">


        {
            cards.map( card => {
                return <CreditCards card={card}/>
            })
        }
      {/* <CreditCards card1={card1} type={card1.type}/>
      <CreditCards card1={card2} />
      <CreditCards card1={card3} /> */}
      
      
    
    </div>
  );
}
root.render(app());
