import Expenses from "./components/Expenses/Expenses";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Gas Bill",
      amount: 750.86,
      date: new Date(2023, 5, 25),
    },
    {
      id: "e2",
      title: "Internet Recharge",
      amount: 471.25,
      date: new Date(2023, 5, 26),
    },
    {
      id: "e3",
      title: "Car Fuel",
      amount: 1001,
      date: new Date(2023, 5, 17),
    },
    {
      id: "e4",
      title: "Electricity Bill",
      amount: 5603,
      date: new Date(2023, 4, 5),
    },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
