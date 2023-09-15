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

console.log(size());

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

console.log(declareLast());