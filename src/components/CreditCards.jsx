import React from "react";


export const cards = [
    {
        Type: "Master Card",
        Number: "1234567890123456",
        expirationMonth: "06",
        expirationYear: "2028",
        bank: "ing",
        owner: "Ronaldo Nazario De Lima",
    },
    {
        Type: " VISA",
        Number: "0987654321987654",
        expirationMonth: "01",
        expirationYear: "2029",
        bank: "CAIXABANK",
        owner: "David Beckam",
    },
    {
        Type: "Master Card",
        Number: "1020304050607080",
        expirationMonth: "08",
        expirationYear: "2027",
        bank: "BBVA",
        owner: "Steven Gerard",
    }
]


export const CreditCards = ({card}) => {
  return (
    <div className="Card1">
      <div className="logo">
        <p>{card.Type}</p>
      </div>
      <img class="Chip" src="../../assets/chip.jpeg" alt="" />
      <h1 className="Number">{card.Number}</h1>
      <div className="Datos">
        <p>{card.expirationMonth}</p>
        <p>{card.expirationYear}</p> <p>{card.bank}</p>
      </div>
      <p className="Owner">{card.owner}</p>
    </div>
  );
};

export default CreditCards;
