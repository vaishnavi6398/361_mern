import React, { useState, useEffect } from "react";
import "./Week4.css";
function UseStateExample() {
  const name = null;
  const rno = null;
  const [details, setDetails] = useState(
    <div>
      <h3>Name: {name}</h3>
      <h3>Roll No: {rno}</h3>
    </div>
  );
  const getDetails = () => {
    const name = "M.vaishnavi";
    const rno = "2211CS010361";
    setDetails(
      <div style={{backgroundColor:'burgandy'}}>
        <h2>Name: {name}</h2>
        <h2>Roll No: {rno}</h2>
      </div>
    );
  };
  return (
    <div className="">
      <h1>
        Q1. Create a React Component, Display initial State of Student
        Hall-ticket and Name and change its State by using useState().
      </h1>
      <h2 style={{ textDecorationLine: "underline" }}>Use State Example</h2>
      <div className="">
        <h2>{details}</h2>
        <button onClick={getDetails}>Click here to get Details</button>
      </div>
    </div>
  );
}
function UseEffectExample() {
const headings = ["SNO","Name of the student", "Roll No", "Email ID"];
  const [Details, setDetails] = useState([]);
  useEffect(() => {
    const fetchStudentDetails = async () => {
      const response = await fetch("https://sindhuravuri666.github.io/StudentList/StudentList.json"
      );

      const data = await response.json();

      console.log(data);

      setDetails(data);
    };

    fetchStudentDetails();
  }, []);
  const [details, sliceDetails] = useState();
  return (
    <div className="">
      <h1>
        Q2. Create a React Component, 
        Display student Hall-ticket, 
        Name 
        and Email-Id using useEffect() fetch student info from student.json.
      </h1>

      <h2 style={{ textDecorationLine: "double" }}>
        Use effect example by fetching data from student.json
      </h2>
      <div >
        <table striped bordered hover variant="danger" >
            <div style={{backgroundColor:'burgandy'}}>
          <thead>
            <tr>
                <th>S.No</th>
                <th>Name</th>
                <th>Roll No</th>
                <th>EmailID</th>
            </tr>
          </thead>
          <tbody>
            {Details.slice(0, 5).map((student, index) => (
              <tr key={index}>
                
                <td>{index + 1}</td>
                <td>{student.Name}</td>
                <td>{student.RollNo}</td>
                <td>{student.EmailID}</td>
                
              </tr>
            ))}
          </tbody>
          </div>
        </table>
      </div>
    </div>
  );
}
function Week4() {
  return (
    <div className="">
      <h2>
        Week 4 - Create React App and Implement API Calls using React Hooks
      </h2>
      <hr />
      <UseStateExample />
      <br />
      <UseEffectExample />
    </div>
  );
}
export default Week4;