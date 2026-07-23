// Module ID: 752
// Function ID: 8804
// Name: Stack
// Dependencies: [725, 753, 754, 755, 756, 757]

// Module 752 (Stack)
class Stack {
  constructor(arg0) {
    tmp = require("ListCache");
    tmp = new tmp(global);
    this.__data__ = tmp;
    this.size = tmp.size;
    return;
  }
}
Stack.prototype.clear = require("stackClear");
Stack.prototype.delete = require("stackDelete");
Stack.prototype.get = require("stackGet");
Stack.prototype.has = require("stackHas");
Stack.prototype.set = require("stackSet");

export default Stack;
