class EmployeePayroll {
    //Property
    id;
    name;
    salary;
    // Constructor
    constructor(id, name, salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    getDetails = () => `ID: ${this.id}, Name: ${this.name}, Salary: $${this.salary}`;
}

let emp1 = new EmployeePayroll(101, "Bipin Kumar Sahu", 150234);
let emp2 = new EmployeePayroll(102, "Aman", 9000000);
let emp3 = new EmployeePayroll(103, "Aryan", 540000);
console.log(emp1.getDetails());
console.log(emp2.getDetails());
console.log(emp3.getDetails());