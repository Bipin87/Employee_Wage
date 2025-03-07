class EmployeePayroll {
    // Properties
    id;
    _name; // Private name property
    salary;
    gender;
    startDate;

    // Constructor
    constructor(id, name, salary, gender, startDate) {
        this.id = id;
        this._name = name;
        this.salary = salary;
        this.gender = gender;
        this.startDate = startDate;
    }

    // Getter and Setter for name
    get name() { return this._name; }
    set name(name) { this._name = name; }

    // Method to return object details as a string
    toString() {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const empDate = this.startDate ? this.startDate.toLocaleDateString("en-US", options) : "undefined";
        return `id=${this.id}, name='${this._name}', salary=${this.salary}, gender=${this.gender}, startDate=${empDate}`;
    }
}

// Creating EmployeePayroll object
let employeePayrollData = new EmployeePayroll(1, "Bipin Kumar Sahu", 30000);
console.log(employeePayrollData.toString());

// Modifying employee name
employeePayrollData.name = "Bipin";
console.log(employeePayrollData.toString());

// Creating a new EmployeePayroll object with gender and startDate
let newEmployeePayrollData = new EmployeePayroll(2, "Aryan", 32000, "F", new Date());
console.log(newEmployeePayrollData.toString());
