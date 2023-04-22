const Part = ({ name, exercises }) => (
  <p>
    {name} {exercises}
  </p>
);

const Content = ({ parts }) => {
  return parts.map((part) => (
    <Part key={part.id} name={part.name} exercises={part.exercises} />
  ));
};

const Total = ({ parts }) => {
  const total = parts.reduce((accu, curr) => accu + curr.exercises, 0);
  return <b>total of {total} exercises</b>;
};

const Course = ({ course }) => {
  return (
    <div>
      <h2>{course.name}</h2> <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

export default Course;
