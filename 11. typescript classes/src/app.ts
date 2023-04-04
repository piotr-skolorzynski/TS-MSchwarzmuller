class Department {
  name: string;
  private employees: string[] = []; //pozwala na dostęp do tej wartości tylko poprzez metodę w klasie

  constructor(n: string) {
    this.name = n;
  }

  describe() {
    console.log('Department: ' + this.name);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const accounting = new Department('Accounting');

accounting.addEmployee('Max');
accounting.addEmployee('Skolo');

accounting.describe(); //wywołanie metody na obiekcie
accounting.printEmployeeInformation();
