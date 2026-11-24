
function Student(props) {
  return (
    <div>
      <h2>Student Details</h2>
      <h3>Student Name: {props.name}</h3>
      <h3>Course Name: {props.course}</h3>
      <h3>Faculty Name: {props.faculty}</h3>
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>Student Course Details</h1>

      <Student
        name="Chandrika"
        course="Data Science"
        faculty="Amariah"
      />
    </div>
  );
}

export default App;
