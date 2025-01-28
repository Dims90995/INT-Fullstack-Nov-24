// Define the Employee interface
interface Employee {
    id: number;
    name: string;
    position: string;
    salary: number;
  }
  
  // Create an array to store employee data

let employees: Employee[] = [];

// Function to add a new employee
function addEmployee(employee: Employee) {
    employees.push(employee);
    console.log(`Employee added:`, employee);
}

// Function to update an existing employee by ID
function updateEmployee(id: number, updatedData: Partial<Employee>): void {
    const employee = employees.find((emp) => emp.id === id);
    if (employee) {
        Object.assign(employee, updatedData);
        console.log(`Employee updated:`, employee);
    } else {
        console.log(`Employee with id ${id} not found`);
    }
}

// Function to delete an employee by ID
function deleteEmployee(id: number): void {
    const index = employees.findIndex((emp) => emp.id === id);
    if (index !== 1) {
        const deletedEmployee = employees.splice(index, 1);
        console.log(`Employee deleted:`, deletedEmployee[0]);
    } else {
        console.log(`Employee with ID ${id} not found.`);
    }
}

// Function to list all employees
function listEmployees(): void {
    console.log('Employee List:' , employees);
}

// Example usage
addEmployee({ id: 1, name: "Alice", position: "Manager", salary: 5000 });
addEmployee({ id: 2, name: "Bob", position: "Developer", salary: 4000 });

listEmployees();

updateEmployee(2, { position: "Senior Developer", salary: 4500 });

deleteEmployee(1);

listEmployees();