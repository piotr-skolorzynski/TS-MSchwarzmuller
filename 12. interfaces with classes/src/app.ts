interface Greetable {
  name: string;

  greet(phrase: string): void;
}

interface AnotherInterface {
  age: number;
}

class Person implements Greetable, AnotherInterface {
  name: string;
  age: number = 30;

  constructor(n: string) {
    this.name = n;
  }

  greet(phrase: string): void {
    console.log(phrase + ' ' + this.name);
  }
}

const user1 = new Person('Max');

user1.greet('Hi there - I am');
