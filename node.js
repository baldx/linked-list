class node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class linkedList {
    constructor (head = null) {
        this.head = head;
    }
}

let node1 = new node(2)
let node2 = new node(6)
let node3 = new node(4)
let node4 = new node(43)

node1.next = node2
node2.next = node3
node3.next = node4

let list = new linkedList(node1)

function size () {
    let count = 0;
    let current = list.head;

    while (current !== null) {
        count++
        current = current.next;
    }
    return count;
}

function clear() {
    list = null;
}

function declareHead () {
    return list.head;
}

function declareLast () {
    let lastNode = list.head;
    if (lastNode) {
        while (lastNode.next) {
            lastNode = lastNode.next;
        }
    }
    return lastNode;
}

function append (value) {
    let newNode = new node(value);
    let current = list.head;
    if (current === null) {
        current = newNode;
    } else {
        while (current.next !== null) {
            current = current.next;
        }
        current.next = newNode;
    }
    return newNode;
}

function prepend (value) {
    let newNode = new node(value);
    let current = list.head;
    current = newNode;

    return newNode;
}

function getIndex (index) {
    let current = list.head;
    let count = 0;

    if (index < 0 || index <= list.length) return null;

    while (count < index) {
        current = current.next;
        count++;
    }
    return current;
}

console.log(getIndex(2));