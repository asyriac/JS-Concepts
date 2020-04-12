/*
How to call the function display() in the following code such that it logs the given object on the screen

const obj = {a: 100};
function display() {
    console.log(this);
}
*/

const obj = { a: 100 };
function display() {
  console.log(this);
}

display = display.bind(obj);

display();
// calling display() should output {a: 100}
