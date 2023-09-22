console.log("Hello World!")

let employeeRow = document.querySelector("#employee-table");

let monthlySalaryDiv = document.querySelector('#monthly-salary');

let employeeIndex = 0;

let salaryArray = [];

let currency = Intl.NumberFormat('en-US',{
    style: "currency",
    currency: "USD",
});
   
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
            <td>${currency.format(salary)}</td>
            <td><button onClick="removeRow(event,${employeeIndex})">Remove</button></td>
        </tr>
    `

    // increase employee index to keep track of where the salary is located.
    employeeIndex ++;

    // update monthly salary
    salaryArray.push(Number(salary));

    monthlySalaryCalc();

    //clear out inputs
    clearInputs();
    
    // prefent form from refreshing the page.
    event.preventDefault();
}

function clearInputs(){
    document.querySelector('#first-name').value = '';
    document.querySelector('#last-name').value = '';
    document.querySelector('#ID').value = '';
    document.querySelector('#job-title').value = '';
    document.querySelector('#salary').value = '';
}

function monthlySalaryCalc(){
    
    // declare total Salary and set it to zero.
    let totalSalary = 0;

    // run through salaryArray and add into totalSalary
    for(let income of salaryArray){
        totalSalary += income;
    }

    // declare monthlySalary and devide the total by 12 to return the monthly salary.
    let monthlySalary = (totalSalary / 12);
   
    // append the DOM with new information
    monthlySalaryDiv.innerHTML =`
        <h4>Total Monthly: ${currency.format(monthlySalary)}</h4>
    `
    if(monthlySalary >= 20000){
        document.getElementById('monthly-salary').style.backgroundColor ='red';
    }else{
        document.getElementById('monthly-salary').style.backgroundColor ='white';
    }

}

function removeRow(event,index){
    event.target.parentElement.parentElement.remove();
    salaryArray[index] = 0;
    monthlySalaryCalc();
}

//clear out initial inputs.
clearInputs();
monthlySalaryCalc();