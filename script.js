console.log("Hello World!")
let employeeRow = document.querySelector("#employee-table");

//clear out initial inputs.
    document.querySelector('#first-name').value = '';
    document.querySelector('#last-name').value = '';
    document.querySelector('#ID').value = '';
    document.querySelector('#job-title').value = '';
    document.querySelector('#salary').value = '';
    
    
function addEmployee(event){
    
    let firstName = document.querySelector('#first-name').value;
    let lastName = document.querySelector('#last-name').value;
    let Identification = document.querySelector('#ID').value;
    let jobTitle = document.querySelector('#job-title').value;
    let salary = document.querySelector('#salary').value;
    



    employeeRow.innerHTML += `
        <tr>
            <td>${firstName}</td>
            <td>${lastName}</td>
            <td>${Identification}</td>
            <td>${jobTitle}</td>
            <td>${salary}</td>
            <td><button onClick="removeRow(event)">Remove</button></td>
        </tr>
    `
    //clear out inputs
    document.querySelector('#first-name').value = '';
    document.querySelector('#last-name').value = '';
    document.querySelector('#ID').value = '';
    document.querySelector('#job-title').value = '';
    document.querySelector('#salary').value = '';
    
    // prefent form from refreshing the page.
    event.preventDefault();
}

function removeRow(event){
    event.target.parentElement.parentElement.remove();
}