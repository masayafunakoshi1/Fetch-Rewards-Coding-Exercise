import React, { useState, useEffect } from "react";
import "./App.css";
import Table from "./Components/Table";
import Information from "./Components/Information";

function App() {
  const [data, setData] = useState();
  const [points, setPoints] = useState();
  const [dataValidator, setValidator] = useState(false); //Checks if data is done loading
  const [listOfTotalPoints, setListOfTotalPoints] = useState({});

  //Fetch request on page load for rewards database (JSON in public folder locally)
  useEffect(() => {
    const url = "http://localhost:8000/data";
    fetch(url)
      .then((res) => res.json())
      .then((info) => {
        let newArr = info.sort(
          (x, y) => Date.parse(x.timestamp) - Date.parse(y.timestamp),
          //Sorts data by timestamp (oldest to most recent)
        );
        setData(newArr);
        setValidator(true);
      })
      .catch((err) => console.log("Error: " + err));
  }, []);

  //function to get the total number of points
  //Total points are updated based on total shown on graph/database
  function totalPoints() {
    let total = 0;
    data.forEach((el) => {
      if (!Number.isInteger(el.points)) {
        let num = parseInt(el.points);
        total += num;
      } else {
        total += el.points;
      }
    });
    return total;
  }

  return (
    <div className="App">
      <div className="Logo-Title">
        <button onClick={() => console.log(data)} />
        <img
          className="Logo-Img"
          src="fetchRewardsLogo.png"
          alt="Fetch-Rewards-Logo-PNG"
        />
      </div>
      <Information
        data={data}
        totalPoints={totalPoints}
        dataValidator={dataValidator}
        setListOfTotalPoints={setListOfTotalPoints}
      />
      <div className="Table-Container">
        <Table
          points={points}
          setPoints={setPoints}
          data={data}
          setData={setData}
          listOfTotalPoints={listOfTotalPoints}
        />
      </div>
    </div>
  );
}

export default App;
