// Module ID: 638
// Function ID: 639
// Name: Stack
// Dependencies: [611, 639, 640, 641, 642, 643]

// Module 638 (Stack)
import ListCache from "ListCache" /* 611 */;
import stackClear from "stackClear" /* 639 */;
import stackDelete from "stackDelete" /* 640 */;
import stackGet from "stackGet" /* 641 */;
import stackHas from "stackHas" /* 642 */;
import stackSet from "stackSet" /* 643 */;

class Stack {
  constructor(arg0) {
    const tmp = new ListCache(arg0);
  }
}
Stack.prototype.clear = stackClear;
Stack.prototype.delete = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

export default Stack;
