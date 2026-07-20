// Module ID: 752
// Function ID: 8799
// Name: Stack
// Dependencies: []

// Module 752 (Stack)
class Stack {
  constructor(arg0) {
    tmp = require(dependencyMap[0]);
    tmp = new tmp(global);
    this.__data__ = tmp;
    this.size = tmp.size;
    return;
  }
}
Stack.prototype.clear = require(dependencyMap[1]);
Stack.prototype.delete = require(dependencyMap[2]);
Stack.prototype.get = require(dependencyMap[3]);
Stack.prototype.has = require(dependencyMap[4]);
Stack.prototype.set = require(dependencyMap[5]);

export default Stack;
