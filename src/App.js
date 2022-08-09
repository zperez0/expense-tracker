import React from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Toliet Paper",
      amount: 94.12,
      date: new Date(2022, 8, 8),
    },
    {
      id: "e2",
      title: "Tv",
      amount: 699.49,
      date: new Date(2022, 2, 12),
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 300.23,
      date: new Date(2022, 2, 28),
    },
    {
      id: "e4",
      title: "Desk",
      amount: 450,
      date: new Date(2022, 5, 12),
    },
  ];

  return (
    <div>
      <NewExpense />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
