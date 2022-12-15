

"use strict";

window.onload = () => {

  
function courseData(){
  fetch(`http://localhost:8081/api/courses`)
  .then(Response => Response.json())
  .then(data=>{
    courseDataDisplay(data);
  })
}

courseData();


function courseDataDisplay (data){

  let tableBody = document.getElementById("tableBody")
  for(let cData of data){
    let row = tableBody.insertRow(-1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    cell1.innerHTML = cData.dept;
    cell2.innerHTML = cData.courseNum;
    cell3.innerHTML = `<a href = details.html?courseid=${cData.id}>${cData.courseName}</a>`;
    cell4.innerHTML = cData.instructor;


  }

}


}


