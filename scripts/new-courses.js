

"use strict";
const outputOfInput = document.getElementById("outputOfInput");
const enrollBtn = document.getElementById("enrollBtn");
const inputStDept = document.getElementById("dept");
const courseNum = document.getElementById("courseNum");
const courseName = document.getElementById("courseName");
const instructor = document.getElementById("instructor");
const startDate = document.getElementById("startDate");
const numDays = document.getElementById("numDays");

window.onload = () => {


  enrollBtn.onclick = () =>{
   const outputOfInput = document.getElementById("outputOfInput")
   let formData = {
    dept: dept.value,
    courseNum: courseNum.value,
    courseName: courseName.value,
    instructor: instructor.value,
    startDate: startDate.value,
    numDays: numDays.value

   };

    fetch(`http://localhost:8081/api/courses`, {
  method: 'POST',
  body: JSON.stringify(formData),
  headers:
  {
    "content-type": "application/json; charset=UTF-8"
  }

    })
    .then(res => res.json())
    .then(json =>{

      window.location.href = "index.html";

    })
    .then(err=>{
      outputOfInput.innerHTML = "Error"
    })
    
  }
}