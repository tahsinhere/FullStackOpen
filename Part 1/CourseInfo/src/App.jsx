import { useState } from "react";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const rate = (rate) => {
    setGood(rate);
  };

  const rate2 = (rate) => {
    setBad(rate);
  };

  const rate3 = (rate) => {
    setNeutral(rate);
  };

  let all = good + neutral + bad;

  let average = (good + bad * -1) / all;

  let positive = (good / all) * 100;

  return (
    <div>
      <h1>Give FeedBack </h1>

      <Button onClick={() => rate(good + 1)} text="Good" />
      <Button onClick={() => rate3(neutral + 1)} text="Neutral" />
      <Button onClick={() => rate2(bad + 1)} text="Bad" />

      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        all={all}
        average={average}
        positive={positive}
      />
    </div>
  );
};

const Button = (props) => {
  return <button onClick={props.onClick}> {props.text} </button>;
};

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};

const Statistics = ({ all, average, positive, good, bad, neutral }) => {
  if (all == 0) {
    return (
      <div>
        <h1>Statistics</h1>
        <p1>No Feed Back Given</p1>
      </div>
    );
  }
  return (
    <div>
      <h1>Statistics</h1>
      <table>
        <tbody>
          <StatisticLine text="Good" value={good} />
          <StatisticLine text="Neutral" value={neutral} />
          <StatisticLine text="Bad" value={bad} />
          <StatisticLine text="All" value={all} />
          <StatisticLine text="Average" value={average.toFixed(1)} />
          <StatisticLine text="Positive" value={positive.toFixed(1) + "%"} />
        </tbody>
      </table>
    </div>
  );
};

export default App;
