const App = () => {
  const course = "Half Stack application development";

  const part1 = {
    name: "Fundamentals of React",
    exercises: 10,
  };
  const part2 = {
    name: "Using props to pass data",
    exercises: 7,
  };
  const part3 = {
    name: "State of a component",
    exercises: 14,
  };

  return (
    <div>
      <Header course={course} />

      <Content part1={part1} part2={part2} part3={part3} />

      <Total
        exercise1={part1.exercises}
        exercise2={part2.exercises}
        exercise3={part3.exercises}
      />
    </div>
  );
};

export default App;

function Header(props) {
  return <h1>{props.course}</h1>;
}

function Content(props) {
  return (
    <>
      <div>
        {props.part1.name}
        <div>{` Exercises: ${props.part1.exercises}`}</div>
      </div>
      <div>
        {props.part2.name}
        <div> {` Exercises: ${props.part2.exercises}`}</div>
      </div>
      <div>
        {props.part3.name}
        <div>{` Exercises: ${props.part3.exercises}`}</div>
      </div>
    </>
  );
}

const Total = (props) => {
  return (
    <div>{`Total: ${props.exercise1 + props.exercise2 + props.exercise3}`}</div>
  );
};
