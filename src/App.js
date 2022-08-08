import Expenses from "./components/Expenses";

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
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
