// Implement Stack class in JS.

// Stack class implementation
class Stack {
  constructor() {
    this.stack = [];
  }

  //   Inserting data to stack
  push(data) {
    this.stack.push(data);
    console.log(`${data} added to stack`);
  }

  //   Removing from stack
  pop() {
    if (this.stack.length == 0) {
      console.log("Stack is empty");
      return;
    }
    console.log(`${this.stack[this.stack.length - 1]} deleted`);
    this.stack.pop();
  }

  //   Fetching top element in stack
  peek() {
    if (this.stack.length == 0) {
      console.log("Stack is empty");
      return;
    }
    console.log(`${this.stack[this.stack.length - 1]}`);
  }

  //   Getting size of stack
  getSize() {
    console.log(this.stack.length);
  }

  //   Check if stack is empty
  isEmpty() {
    console.log(this.stack.length === 0);
  }
}

let stack = new Stack();
stack.push(1); // 1 added to stack
stack.push(2); // 2 added to stack
stack.push(3); // 3 added to stack
stack.push(4); // 4 added to stack
stack.getSize(); // 4
stack.isEmpty(); // false
stack.pop(); // 4 deleted
stack.peek(); // 3
