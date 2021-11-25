import React, { useState, useEffect } from "react";
import PayerPoints from "./PayerPoints";
import "./styles/Information.css";

//Information showed at the top of the screen, showing payer individual point totals and user overall point total

const Information = ({
  data,
  totalPoints,
  dataValidator,
  setListOfTotalPoints,
}) => {
  const [uniqueNames, setUniqueNames] = useState([]);

  //This function should allow for certain payer's points to be collected from data into newArr, then add them all up and return that value to show

  const payerPointTotals = (payerName) => {
    let final;
    let newArr = data
      .filter((info) => {
        if (info.payer == payerName) return info;
      })
      .map(({ points }) => {
        return Number.isInteger(points) ? points : parseInt(points);
      });

    final = newArr.reduce((prev, curr) => prev + curr);
    return final;
  };

  //This function gets all the unique names of the payers to use for PayerPoints.js
  function payerUniqueNames() {
    if (dataValidator) {
      let nameArr = data.map(({ payer }) => payer);
      let newSet = new Set(nameArr);
      setUniqueNames([...newSet]);
    }
  }

  useEffect(() => {
    payerUniqueNames();
  }, [dataValidator]);

  useEffect(() => {
    listOfPayerPoints();
  }, [uniqueNames]);

  //Get list of all payer points into setTotalPoints
  function listOfPayerPoints() {
    let tempObj = {};
    for (const name of uniqueNames) {
      let value = payerPointTotals(name);
      tempObj[name] = value;
    }
    setListOfTotalPoints(tempObj);
  }

  return data ? (
    <div className="Information-Container">
      <div className="Information">
        <p className="Account-Name">
          <strong>Account:</strong> Mfunakoshi98
        </p>
        <p>
          <strong>Total Points:</strong> {data ? `${totalPoints()}` : "-----"}
        </p>
      </div>
      {/* List of total points in each payer, would make it automatically add new ones, but is too much for small project */}
      <div className="Payer-Name-Points">
        <div className="Payer-Name-Points-Title">Payer Totals:</div>
        <ul className="Payer-Name-Points-List">
          <PayerPoints
            uniqueNames={uniqueNames}
            payerPointTotals={payerPointTotals}
          />
        </ul>
      </div>
    </div>
  ) : (
    <div>Gathering Data</div>
  );
};

export default Information;
