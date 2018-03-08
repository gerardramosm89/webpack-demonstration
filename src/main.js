console.log('hello from main.js!');
document.querySelector('#root').innerHTML = `<h1>Hello from main.js!</h1>`;

const x = (args) => {
  const { a, b } = args;
  console.log("this is an async arrow function");
  console.log(a, b);
}
x({ a: 'a', b: '2' });
require('./main.css');
require('./main.scss');
require('./index.html');