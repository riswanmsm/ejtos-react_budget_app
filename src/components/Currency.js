import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const Currency = (props) => {
  const { currency, dispatch } = useContext(AppContext);
  const [selectedCurrency, setSelectedCurrency] = useState(currency);

  const changeCurrency = (value) => {
    setSelectedCurrency(value);
    dispatch({
      type: "CHG_CURRENCY",
      payload: value,
    });
  };

  return (
    <div className="alert alert-secondary">
      <span>Currency </span>
      <select
        value={selectedCurrency}
        className="custom-select"
        id="inputGroupSelect01"
        onChange={(event) => {
          changeCurrency(event.target.value);
        }}
      >
        <option value="$" name="marketing">
          $ Dollar
        </option>
        <option value="£" name="sales">
          £ Pound
        </option>
        <option value="€" name="finance">
          € Euro
        </option>
        <option value="₹" name="hr">
          ₹ Rupee
        </option>
      </select>
    </div>
  );
};

export default Currency;
