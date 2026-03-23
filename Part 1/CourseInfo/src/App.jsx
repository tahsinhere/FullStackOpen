const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <div>
        <Header course={course} />
        <Content course={course} />
        <Total course={course} />
      </div>
    </div>
  );
};
export default App;

function Header(props) {
  return <h1>{props.course.name}</h1>;
}

function Content(props) {
  return (
    <>
      <div>
        {props.course.parts[0].name} {props.course.parts[0].exercises}
      </div>
      <div>
        {props.course.parts[1].name} {props.course.parts[1].exercises}
      </div>
      <div>
        {props.course.parts[2].name} {props.course.parts[2].exercises}
      </div>
    </>
  );
}

const Total = (props) => {
  return (
    <div>{`Total: ${props.course.parts[0].exercises + props.course.parts[1].exercises + props.course.parts[2].exercises}`}</div>
  );
};
