import React from "react";
import "./styles/PayerPoints.css";

const PayerPoints = (props) => {
  return (
    <>
      {props.uniqueNames.map((name) => {
        return (
          <li>
            <strong>{name}: </strong> {props.payerPointTotals(`${name}`)}
          </li>
        );
      })}
    </>
  );
};

export default PayerPoints;
