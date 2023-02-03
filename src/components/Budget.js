import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const Budget = () => {
  const { budget, remaining, currency } = useContext(AppContext);
  const [newBudget, setNewBudget] = useState(budget);
  const upperLimit = 20000;
  let spending = budget - remaining;

  const setBudget = (value) => {
    if (value > 20000) {
      alert("The value cannot exceed upper limit " + currency + upperLimit);
      return;
    }

    if (value < spending) {
      alert("You cannot reduce the budget value lower than the spending");
      return;
    }

    setNewBudget(value);
  };

  return (
    <div className="alert alert-secondary">
      <span>Budget: {currency}</span>
      <input
        type="number"
        value={newBudget}
        onChange={(event) => setBudget(event.target.value)}
        onFocus={() => setNewBudget(budget)}
        step="10"
      />
    </div>
  );
};

export default Budget;
