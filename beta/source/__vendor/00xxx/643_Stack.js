// Module ID: 643
// Function ID: 644
// Name: Stack
// Dependencies: [616, 644, 645, 646, 647, 648]

// Module 643 (Stack)
import ListCache from "ListCache" /* 616 */;
import stackClear from "stackClear" /* 644 */;
import stackDelete from "stackDelete" /* 645 */;
import stackGet from "stackGet" /* 646 */;
import stackHas from "stackHas" /* 647 */;
import stackSet from "stackSet" /* 648 */;

class Stack {
  constructor(arg0) {
    obj = {};
    tmp = new closure_0(closure_1[0])(global);
    obj.__data__ = tmp;
    obj.size = tmp.size;
    return;
  }
}
Stack.prototype.clear = stackClear;
Stack.prototype.delete = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

export default Stack;
