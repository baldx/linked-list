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

function removeNode () {
    let current = list.head;
    if (current === null) {
        return null;
    } else {
        while (current.next !== null) {
            current = current.next;
        }
        current = null;
    }
    return list;
}

function contains (value) {
    let current = list.head;

    if (current === null) {
        return false;
    } else {
        while (current !== null) {
            
            if (current.value === value) {
                return true;
            }

            current = current.next;
        }
        return false;
    }
}


function find (value) {
    let current = list.head;
    let count = 0;

    if (current === null) {
        return null;
    } else {
        while (current !== null) {

            count++;

            if (current.value === value) {
                return count;
            }

            current = current.next;
        }
    }
}

function convertToString () {
    let current = list.head;
    let result = "";

    if (current === null) {
        return console.log(current);;
    } else {
        while (current !== null) {
            result += current.value;

            if (current.next !== null) {
                result += " -> ";
            } else if ( current.next === null) {
                result += ` -> ${null}`
            }
            current = current.next
        }
        return result;
    }
}


function insertNode (value, index) {

    if (index < 0) return "Invalid index"

    let newNode = new node(value);

    if (index === 0) {
        newNode.next = list.head;
        list.head = newNode;
        return "Node with value " + value + " inserted at index "+ index;
    } else {
        let current = list.head;
        let prev = null;
        let count = 0;

        while (current !== null && count < index) {
            prev = current;
            current = current.next;
            count++;
        }

        if (count < index) {
            return "Out of range2"
        }

        prev.next = newNode;
        newNode.next = current;
    }

    return "Node with value " + value + " inserted at index "+ index;
}

console.log(insertNode("apple", 2));
console.log(size());