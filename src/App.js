import { useState } from "react";

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

export default App;

const Counter = () => {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  let days = count;

  const addDays = () => {
    const date = new Date();
    const addCountToDate = date.getDate() + count;
    date.setDate(addCountToDate);
    const formatted = date.toLocaleDateString();
    return formatted;
  };

  return (
    <div>
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        {step}
      </div>

      <div>
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <input
          type="text"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>

      <span>
        {count === 0
          ? `Today is ${addDays()}`
          : count > 0
          ? `${days} days from today is ${addDays()}`
          : `${Math.abs(count)} days ago was ${addDays()}`}
      </span>
    </div>
  );
};
