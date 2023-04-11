const names: Array<string> = ['Max', 'Manuel'];
//inny sposób zapisu to string[]

const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('This is done');
  }, 2000);
});
