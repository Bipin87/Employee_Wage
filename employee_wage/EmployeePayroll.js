class EmployeePayroll {
    // Properties
    id;
    _name;
    salary;
    gender;
    startDate;

    // Constructor with validation
    constructor(id, name, salary, gender, startDate) {
        try {
            // Validate ID and Salary 
            if (!Number.isInteger(id) || id <= 0) {
                throw new Error("Invalid ID: Must be a positive non-zero integer.");
            }
            if (!Number.isFinite(salary) || salary <= 0) {
                throw new Error("Invalid Salary: Must be a positive number.");
            }

            // Validate Gender 
            if (!/^(M|F)$/.test(gender)) {
                throw new Error("Invalid Gender: Must be 'M' or 'F'.");
            }

            // Validate Start Date 
            if (startDate && startDate > new Date()) {
                throw new Error("Invalid Start Date: Cannot be in the future.");
            }

            this.id = id;
            this._name = name;
            this.salary = salary;
            this.gender = gender;
            this.startDate = startDate;
        } catch (e) {
            console.error(`Error creating Employee: ${e.message}`);
            this.id = this._name = this.salary = this.gender = this.startDate = null;
        }
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

// Test Cases
try {
    let validEmployee = new EmployeePayroll(1, "Bipin Kumar Sahu", 50000, "M", new Date("2023-05-10"));
    console.log(validEmployee.toString());

    let invalidIdEmployee = new EmployeePayroll(0, "Sadhana", 40000, "F", new Date("2023-06-15"));
    console.log(invalidIdEmployee.toString());

    let invalidSalaryEmployee = new EmployeePayroll(2, "Aryan", -5000, "M", new Date("2023-04-20"));
    console.log(invalidSalaryEmployee.toString());

    let invalidGenderEmployee = new EmployeePayroll(3, "ABC", 35000, "X", new Date("2023-02-18"));
    console.log(invalidGenderEmployee.toString());

    let futureDateEmployee = new EmployeePayroll(4, "Durgesh", 45000, "M", new Date("2026-01-01"));
    console.log(futureDateEmployee.toString());

} catch (error) {
    console.error(`Error: ${error.message}`);
}
