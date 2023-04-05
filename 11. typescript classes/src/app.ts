abstract class Department {
  static fiscalYear = 2023;
  protected employees: string[] = [];

  constructor(private readonly id: string, public name: string) {}

  static createEmployee(name: string) {
    return { name };
  }

  abstract describe(): void;

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const employee1 = Department.createEmployee('Krystian');
console.log(employee1, Department.fiscalYear);

class AccountingDepartment extends Department {
  private lastReport: string;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }

    throw new Error('No report found.');
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error('Please pass a valid value');
    }

    this.addReport(value);
  }

  constructor(id: string, private reports: string[]) {
    super(id, 'Accounting');
    this.lastReport = reports[0];
  }

  describe(): void {
    console.log('accounting department');
  }

  addEmployee(name: string) {
    if (name === 'Max') {
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

const accounting = new AccountingDepartment('d2', []);
accounting.addReport('Something went wrong ...');
accounting.printReports();
accounting.addEmployee('Max');
accounting.addEmployee('Wiesiek');
accounting.printEmployeeInformation();
accounting.mostRecentReport = 'Year End Report';
console.log(accounting.mostRecentReport);

class ITDepartment extends Department {
  //   admins: string[] = []; // można dłuższą wersję wtedy w parametrze admin nie ma public
  constructor(id: string, public admins: string[]) {
    super(id, 'IT'); //wołanie konstruktora z dziedziczonej klasy
    // this.admins = admins; //inicjalizacja admins zawsze po super dla wersji dłuższej
  }
  describe(): void {
    console.log('IT department');
  }
}

const it = new ITDepartment('it1', ['Krzychu', 'Stefan']);
