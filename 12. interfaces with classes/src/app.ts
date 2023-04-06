interface AddFn {
  (a: number, b: number): number;
}

let add: AddFn;

add = (n1: number, n2: number) => n1 + n2;

interface Named {
  readonly name: string;
}

interface AnotherInterface {
  age: number;
}

interface Greetable extends Named, AnotherInterface {
  greet(phrase: string): void;
}

class Person implements Greetable {
  name: string;
  age: number = 30;

  constructor(n: string) {
    this.name = n;
  }

  greet(phrase: string): void {
    console.log(phrase + ' ' + this.name);
  }
}

let user1: Greetable;

user1 = new Person('Max');

user1.greet('Hi there - I am');
