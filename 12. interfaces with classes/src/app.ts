interface AddFn {
  (a: number, b: number): number;
}

let add: AddFn;

add = (n1: number, n2: number) => n1 + n2;

interface AnotherInterface {
  age: number;
}

interface Greetable extends Named, AnotherInterface {
  greet(phrase: string): void;
}
interface Named {
  readonly name?: string;
  outputName?: string;
}

class Person implements Named {
  name?: string;
  age: number = 30;

  constructor(n?: string) {
    if (n) {
      this.name = n;
    }
  }

  greet(phrase: string): void {
    if (this.name) {
      console.log(phrase + ' ' + this.name);

      return;
    }

    console.log('Hi');
  }
}

let user1: Person;

user1 = new Person();

user1.greet('Hi there - I am');
