"use strict";

window.onload = () => {



    const linkPrms = new URLSearchParams(location.search);
    let id = -1;

    if (linkPrms.has(courseid) == true) {
        id = linkPrms.get("courseid");
        fetch(`http://localhost:8081/api/courses/${id}`)
            .then(res => res.json())
            .then(data => {


            })
    }

}
(data) => {
    let outputOfInput = document.getElementById("outputOfInput");
    outputOfInput.innerHTML = `${data.dept} <br> ${data.courseName}<br> ${data.courseNum}<br> ${data.instructor}<br> ${data.startDate}<br> ${data.numDays}`

}

const deleteBtn = document.getElementById("deleteBtn");

deleteBtn.onclick = () => {
    fetch(`http://localhost:8081/api/courses/$data.id`, {
        method: "DELETE"
    })
        .then(res => res.json())
        .then(json => {
            window.location.href = "index.html";
        })

}
