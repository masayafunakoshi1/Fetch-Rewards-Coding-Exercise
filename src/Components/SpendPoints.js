import React, { useState } from "react";
import "./styles/Points.css";

//Form for spending points
//MIGHT BE UNECESSARY TO PASS IN SETPOINTS AND POINTS THROUGH ALL THE COMPONENTS
//Total points are updated based on total shown on graph/database
const SpendPoints = ({
  // points,
  // setPoints,
  listOfTotalPoints,
  storeInDatabase,
  setPayerAndAmount,
  data,
}) => {
  //Function used in SpendPoints.js to spend points

  //iterate through data until points is 0
  //subtract points from oldest points first, subtracting them from the specific payers in listOfTotalPoints
  //send all subtractions into main table/database

  //test cases: if subtracting from specific payer makes their total on the listOfTotalPoints go to negative, only subtract what you could and move on to next on list
  //already ordered from oldest to newest

  let points;

  function pointsSpender() {
    console.log(listOfTotalPoints);
    // for (let i = 0; i < data.length; i++) {
    //   if (data[i].points > 0) {
    //     points -= data[i].points;
    //     listOfTotalPoints.forEach(payer => {
    //       if(payer.name == data[i].payer)
    //     })
    //   }
    // }
    // setPayerAndAmount();

    // setPoints("");
    // storeInDatabase();

    // points = 0;
  }

  return (
    <div>
      <form
        onChange={
          (e) => (points = e.target.value)
          // setPoints(
          //   //validation to check if it's an integer when parseInt(), else let it remain a string
          //   Number.isInteger(parseInt(e.target.value))
          //     ? parseInt(e.target.value)
          //     : e.target.value,
          // )
        }
      >
        <input
          type="number"
          value={points}
          placeholder="Amount of points to spend"
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            pointsSpender(); //Points spender function called with logic to spend points
          }}
        >
          Spend
        </button>
      </form>
    </div>
  );
};

export default SpendPoints;
