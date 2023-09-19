console.log("Hello World!")
let employeeRow = document.querySelector("#employee-table");

function addEmployee(event){
    
    employeeRow.innerHTML += `
        <tr>
            <td>First Name</td>
            <td>Last Name</td>
            <td>ID</td>
            <td>Job Title</td>
            <td>Salary</td>
        </tr>
    `
    event.preventDefault();
}