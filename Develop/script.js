// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');
//list of variables to store the employee data
let userFirstName;
let userLastName;
let userSalary;
let confirmation;
let employeesInfo = [];

// Collect employee data
const collectEmployees = function() {
  
while (true) {
  //The if's statements runs the prompt and checks if the vaule is null and trim excess space
  userFirstName = prompt("Enter employee first name here:");
  if (userFirstName === null || userFirstName.trim() === '') {
    break;
  }

  userLastName = prompt("Enter employee last name here:");
  if (userLastName === null || userLastName.trim() === '') {
    break;
  }

  userSalary = prompt('Enter employee salary:');
  if (userSalary === null || userSalary.trim() === '') {
    break;
  }

  userSalary = parseInt(userSalary);

        if (isNaN(userSalary)) {
            console.log('Invalid salary input');
            continue; 
        }

        // turning the employee information into an array object
  employeesInfo.push({firstName: userFirstName, lastName: userLastName, salary: userSalary});
  console.log("Employees added to array:", employeesInfo[employeesInfo.length - 1]);
        //allows the loop to continue if you want to add more employees
  confirmation = confirm('Do you want to continue adding more employees?')
  if (!confirmation) {
    break;
  }
}
};

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  let sum = 0;

  for (let i = 0; i < employeesArray.length; i++) {
    let userSal = parseInt(employeesArray[i].salary);
    console.log('Salary of employee', i + 1, ':', userSal);
    sum += userSal;
  };

  let average = sum / employeesArray.length;
  // just checking if the varible sum works
  console.log('Sum of salaries:', sum);
  // code to print the average of the employees into the console
  console.log(`The average employee salary between our ${employeesArray.length} employee(s) is $${parseFloat(average.toFixed(2))}`);
    
 };

collectEmployees();
displayAverageSalary(employeesInfo);
// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee

  //choosing a random employee
  let randomWinner = Math.floor(Math.random() * employeesArray.length)
  let winnerEmployee = employeesArray[randomWinner];
  // grabbing both the first and last name of the same employee
  let employFirst = winnerEmployee.firstName;
  let employLast = winnerEmployee.lastName;
  console.log(`Congratulations to ${employFirst} ${employLast}, our random drawing winner!`);
}
getRandomEmployee(employeesInfo);
/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}
collectEmployees();
displayEmployees(employeesInfo);
// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);