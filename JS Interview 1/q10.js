//  Implement LinkedList class in JS.

// Class to define each node
class LinkedListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// Linked list implementation
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  //   Insert at end
  insert(data) {
    const node = new LinkedListNode(data);
    if (this.head == null) {
      this.head = this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = this.tail.next;
    }
    this.size++;
  }

  //   Insert at front
  insertHead(data) {
    const node = new LinkedListNode(data);
    if (this.head == null) {
      this.head = this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  //   Delete an element by providing the index
  remove(index) {
    if (index < 0 || index > this.size || this.head === null) {
      console.log("Invalid index");
      return;
    }

    if (index === 0) {
      console.log(`${this.head.data} deleted`);
      this.head = this.head.next;
    } else {
      let cur = this.head;
      while (index != 1) {
        cur = cur.next;
      }
      console.log(`${cur.next.data} deleted`);
      cur.next = cur.next.next;
    }
  }

  //   Print the linked list
  print() {
    let cur = this.head;
    let answer = "";
    while (cur != null) {
      answer += cur.data + " ";
      cur = cur.next;
    }
    console.log(answer);
  }

  //   Get the size of the linked list
  getSize() {
    console.log(this.size);
  }

  //   Check if linked list is empty
  isEmpty() {
    console.log(this.size === 0);
  }
}

let list = new LinkedList();
list.insert(6);
list.insert(5);
list.insertHead(7);
list.print(); // Output : 7 6 5
list.remove(1); // Output : 6 deleted
list.print(); // Output : 7 5
list.getSize(); // Output : 3
list.isEmpty(); // Output : false
