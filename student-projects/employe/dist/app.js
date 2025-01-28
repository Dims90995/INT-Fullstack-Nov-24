// Create an array to store employee data
var employees = [];
// Function to add a new employee
function addEmployee(employee) {
    employees.push(employee);
    console.log("Employee added:", employee);
}
// Function to update an existing employee by ID
function updateEmployee(id, updatedData) {
    var employee = employees.find(function (emp) { return emp.id === id; });
    if (employee) {
        Object.assign(employee, updatedData);
        console.log("Employee updated:", employee);
    }
    else {
        console.log("Employee with id " + id + " not found");
    }
}
// Function to delete an employee by ID
function deleteEmployee(id) {
    var index = employees.findIndex(function (emp) { return emp.id === id; });
    if (index !== 1) {
        var deletedEmployee = employees.splice(index, 1);
        console.log("Employee deleted:", deletedEmployee[0]);
    }
    else {
        console.log("Employee with ID " + id + " not found.");
    }
}
// Function to list all employees
function listEmployees() {
    console.log('Employee List:', employees);
}
// Example usage
addEmployee({ id: 1, name: "Alice", position: "Manager", salary: 5000 });
addEmployee({ id: 2, name: "Bob", position: "Developer", salary: 4000 });
listEmployees();
updateEmployee(2, { position: "Senior Developer", salary: 4500 });
deleteEmployee(1);
listEmployees();
