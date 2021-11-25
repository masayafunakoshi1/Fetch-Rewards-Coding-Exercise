import React from "react";

const AddPoints = ({ payerAndAmount, setPayerAndAmount, storeInDatabase }) => {
  //Inserts changes to input's value into payerAndAmount state
  function onChangeHandler(e) {
    let value = e.target.value;
    if (e.target.name == "payer") {
      setPayerAndAmount({
        ...payerAndAmount,
        [e.target.name]: value.toUpperCase(), //Making sure payer name is uppercase
      });
    } else {
      setPayerAndAmount({
        ...payerAndAmount,
        [e.target.name]: value,
      });
    }
  }

  return (
    <div>
      <form>
        <input
          type="text"
          name="payer"
          value={payerAndAmount.payer}
          placeholder="Payer Name"
          onChange={(e) => onChangeHandler(e)}
        />
        <input
          type="number"
          name="points"
          value={payerAndAmount.points}
          placeholder="Insert Points"
          onChange={(e) => onChangeHandler(e)}
        />
        <button
          onClick={(e) => {
            storeInDatabase();
          }}
        >
          Add Points
        </button>
      </form>
    </div>
  );
};

export default AddPoints;
