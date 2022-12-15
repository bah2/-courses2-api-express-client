

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
    cell1.innerHTML = cData.dept;
    cell2.innerHTML = cData.courseName;
    cell3.innerHTML = cData.id;

  }

}




}


