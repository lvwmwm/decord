// Module ID: 775
// Function ID: 776
// Name: Stack
// Dependencies: [748, 776, 777, 778, 779, 780]

// Module 775 (Stack)
class Stack {
  constructor(arg0) {
    obj = {};
    tmp = new require("ListCache")(global);
    obj.__data__ = tmp;
    obj.size = tmp.size;
    return;
  }
}
Stack.prototype.clear = require("stackClear");
Stack.prototype.delete = require("stackDelete");
Stack.prototype.get = require("stackGet");
Stack.prototype.has = require("stackHas");
Stack.prototype.set = require("stackSet");

export default Stack;
