// Code goes here!
abstract class Department {
  static fiscalYear = 2020;
  // private readonly id: string;
  // private name: string;
  protected employees: string[] = [];

  constructor(
    protected readonly id: string,
    public name: string
  ) {
    this.id = id;
    this.name = name;
  }

  abstract describe(this: Department): void;

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(
      `Id: ${this.id} => The number of employee is : ${this.employees.length} and they are ${this.employees}`
    );
  }

  static createEmployee(name: string) {
    return { name: name };
  }
}

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }

  describe() {
    console.log("IT department - ID: ", this.id);
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;
  private static instance: AccountingDepartment;

  private constructor(
    id: string,
    private reports: string[]
  ) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }

  static getInstance() {
    if (AccountingDepartment.instance) {
      return this.instance;
    }
    this.instance = new AccountingDepartment("d2", []);
    return this.instance;
  }

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No report found.");
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Please pass in a valid value");
    }
    this.addReport(value);
  }

  describe() {
    console.log(this.id);
  }

  addEmployee(name: string) {
    if (name === "Bigyan") {
      return;
    }
    this.employees.push(name);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }
}

const employee1 = Department.createEmployee("Bigyan");
// console.log(employee1, Department.fiscalYear);

const it = new ITDepartment("d1", ["Bigyan"]);
const accounting = AccountingDepartment.getInstance();
const accounting2 = AccountingDepartment.getInstance();

console.log(accounting, accounting2);

it.addEmployee("Bigyan");
it.addEmployee("Sapkota");

// accounting.employees[2] = "Anna";  // This won't work as employees is private(it can only be accessed with class)

it.describe();
it.printEmployeeInformation();
// console.log(it);

// const accounting = new AccountingDepartment("d2", []);
// accounting.mostRecentReport = "Your end report";
// accounting.addReport("Something went wrong");
// console.log(accounting.mostRecentReport);
// accounting.addEmployee("Bigyan");
// accounting.addEmployee("Sapkota");
// accounting.printEmployeeInformation();
// accounting.printReports();
// accounting.describe();

// const accountingCopy = { name: "sapkota", describe: accounting.describe };
// accountingCopy.describe();
