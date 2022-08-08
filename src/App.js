import ExpenseItem from "./components/ExpenseItem";

function App() {
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
      <h2>Hello World!</h2>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[3].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;
