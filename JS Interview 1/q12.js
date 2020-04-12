// Implement Queue class in JS.

class Queue {
  constructor() {
    this.queue = [];
  }

  //   Inserting data to queue
  add(data) {
    this.queue.push(data);
    console.log(`${data} added to queue`);
  }

  //   Removing from queue
  remove() {
    if (this.queue.length == 0) {
      console.log("queue is empty");
      return;
    }
    console.log(`${this.queue[0]} deleted`);
    this.queue.shift();
  }

  //   Fetching top element in queue
  peek() {
    if (this.queue.length == 0) {
      console.log("queue is empty");
      return;
    }
    console.log(`${this.queue[0]}`);
  }

  //   Getting size of queue
  getSize() {
    console.log(this.queue.length);
  }

  //   Check if queue is empty
  isEmpty() {
    console.log(this.queue.length === 0);
  }
}

let queue = new Queue();
queue.add(1); // 1 added to queue
queue.add(2); // 2 added to queue
queue.add(3); // 3 added to queue
queue.add(4); // 4 added to queue
queue.getSize(); // 4
queue.isEmpty(); // false
queue.remove(); // 1 deleted
queue.peek(); // 2
