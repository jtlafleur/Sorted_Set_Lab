// Sorted Set Lab
// By: Jonathan Lafleur, Michael Macari and Anthony Rusignuolo

var fs = require("fs");
var prompt = require("prompt-sync")();

class Node {
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class SortedSet {
    constructor(){
        this.root = null;
    }

    isEmpty(){
        return this.root === null;
    }

    add(value, node = this.root){
        if(node === this.root && !node) {
            this.root = new Node(value); 
            return;
        }

        if(!node) {
            return new Node(value);
        }

        if(value < node.data) {
            let leftChild = this.add(value, node.left);
            node.left = leftChild;
        }
        else if(value > node.data) {
            let rightChild = this.add(value, node.right);
            node.right = rightChild;
        }
        return node;
    }
    remove(value){}
    contains(value){}
}


function readIn() {
    try {
        return fs.readFileSync('./infile.dat', 'utf8').split(', ');
    }
    catch (error) {
        return "infile.dat doesn't exist";
    }
}

function main() {
    //Read numbers in from infile.dat
    let numbers = readIn();
    if(numbers === "infile.dat doesn't exist") {
        console.log(numbers);
        return;
    }

    console.log(numbers);
    //Create Sorted Set
    let sorted_set = new SortedSet();
    //Insert all numbers into the sorted set
    for(var i=0; i<numbers.length; i++) { 
        numbers[i] = +numbers[i];
        sorted_set.add(numbers[i]);
    }

    console.log(numbers);
    console.log(sorted_set);

 /*    //Prompt user for a value and search the tree to determine if the value is found
    let user_input = prompt("Enter a value to see if the file contains it: ");
    if(/^\d+(\.\d+)?$/.test(user_input)) {
        user_input = Number(user_input);
    }
    else {
        console.log("Your input is not a number");
        return;
    } 

    if(sorted_set.contains(user_input)) 
        console.log("Yes");
    else 
        console.log("No");*/
}

main();
