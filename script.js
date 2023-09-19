console.log("Hello World!")
let employeeList = document.querySelector("#employee-table");

function addEmployee(event){
    event.preventDefault();
    employeeList.innerHTML += `
        <tr>
            <td>First Name</td>
            <td>Last Name</td>
            <td>ID</td>
            <td>Job Title</td>
            <td>Salary</td>
        </tr>
    `

}