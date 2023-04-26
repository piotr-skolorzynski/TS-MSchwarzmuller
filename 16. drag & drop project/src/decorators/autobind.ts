namespace App {
  // autobind decorator
  export function Autobind(
    _: any,
    _2: string,
    descriptior: PropertyDescriptor
  ) {
    const originalMethod = descriptior.value;
    const adjDescriptor: PropertyDescriptor = {
      configurable: true,
      get() {
        const boundFn = originalMethod.bind(this);
        return boundFn;
      },
    };

    return adjDescriptor;
  }
}
