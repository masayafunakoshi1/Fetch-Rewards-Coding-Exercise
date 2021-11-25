import React, { useState } from "react";
import "./styles/Table.css";
import SpendPoints from "./SpendPoints";
import AddPoints from "./AddPoints";

const Table = ({ data, points, setPoints, listOfTotalPoints }) => {
  const date1 = new Date();
  const [payerAndAmount, setPayerAndAmount] = useState({
    payer: "",
    points: "",
    timestamp: date1.toJSON(),
  });

  //Sends new points to database as JSON object
  //Changes can be seen in db.json file
  function storeInDatabase() {
    //Conditional to make sure no empty responses are saved
    if (payerAndAmount.payer === "" || payerAndAmount.points === "") return "";
    const url = "http://localhost:8000/data";
    console.log("ran");
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payerAndAmount),
    })
      .then((res) => res.json())
      .catch((err) => console.log("Error: " + err))
      .then((res) => {
        console.log("Success: ", JSON.stringify(res));
      });
  }

  return (
    <div>
      <SpendPoints
        points={points}
        setPoints={setPoints}
        listOfTotalPoints={listOfTotalPoints}
        storeInDatabase={storeInDatabase}
        setPayerAndAmount={setPayerAndAmount}
        data={data}
      />
      <table className="Table">
        <tbody>
          <tr>
            <th>Payer</th>
            <th>Points</th>
            <th>Timestamp</th>
          </tr>
          {data ? (
            data.map((info) => {
              //creates table based on amount of data received
              //Might need a way to limit the amount of entries, if thinking long-term
              return (
                <tr>
                  <td>{info.payer}</td>
                  <td>
                    {Number.isInteger(info.points)
                      ? info.points
                      : parseInt(info.points)}
                  </td>
                  <td>{info.timestamp}</td>
                </tr>
              );
            })
          ) : (
            <div>No Data Found</div>
          )}
        </tbody>
      </table>
      <AddPoints
        payerAndAmount={payerAndAmount}
        setPayerAndAmount={setPayerAndAmount}
        storeInDatabase={storeInDatabase}
      />
    </div>
  );
};

export default Table;
