type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
  console.log('Name: ' + emp.name);
  if ('privileges' in emp) {
    console.log('Priviliges: ' + emp.privileges);
  }
  if ('startDate' in emp) {
    console.log('Start Date: ' + emp.startDate);
  }
}

const e1: ElevatedEmployee = {
  name: 'Piotr',
  privileges: ['wolne piątki'],
  startDate: new Date(),
};

printEmployeeInformation(e1);

type ElevatedEmployee = Admin & Employee;

type Numeric = number | boolean;

type Universal = Combinable & Numeric;

type Combinable = string | number;

function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: Combinable, b: Combinable) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }

  return a + b;
}

const result = add('Max', ' Schwarz');

class Car {
  drive() {
    console.log('Driving...');
  }
}

class Truck {
  drive() {
    console.log('Driving a truck ...');
  }

  loadCargo(amount: number) {
    console.log('Loading a cargo ...' + amount);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();

  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
}

useVehicle(v1);
useVehicle(v2);

interface Bird {
  type: 'bird';
  flyingSpeed: number;
}

interface Horse {
  type: 'horse';
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  switch (animal.type) {
    case 'bird':
      console.log('flying with speed: ', animal.flyingSpeed);
      break;

    case 'horse':
      console.log('running with speed: ', animal.runningSpeed);
      break;

    default:
      console.log('moving...');
  }
}

moveAnimal({ type: 'bird', flyingSpeed: 55 });

// const userInputElement = <HTMLInputElement>(
//   document.getElementById('user-input')
// );

const userInputElement = document.querySelector(
  'user-input'
) as HTMLInputElement;

userInputElement.value = 'Hi there!';

interface ErrorContainer {
  id: string; // można dodać inne propsy niż ten poniżej ale musi być tego samego typu
  [prop: string]: string;
}

const errorBag: ErrorContainer = {
  id: crypto.randomUUID(),
  email: 'Not a valid email!',
  userName: 'Must start with a capital letter',
};

// const fetchedUserData = {
//   id: 'u1',
//   name: 'Max',
//   // job: {
//   //   title: 'CEO',
//   //   description: 'My own company',
//   // },
// };

// console.log(fetchedUserData?.job?.title);

// //jest to odpowienik z JS
// console.log(fetchedUserData.job && fetchedUserData.job.title);

// tutaj hardcodujemy null więc TS wie że to napewno null ale jeśli
// dane ściągamy to już nie

const userInput = null;
//poniższe rozwiązanie działa dla falsy values
// const storedData = userInput || 'DEFAULT';
//to tylko dla undefined oraz null
const storedData = userInput ?? 'DEFAULT';
