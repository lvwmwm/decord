// Module ID: 651
// Function ID: 652
// Name: Stack
// Dependencies: [624, 652, 653, 654, 655, 656]

// Module 651 (Stack)
import ListCache from "ListCache" /* 624 */;
import stackClear from "stackClear" /* 652 */;
import stackDelete from "stackDelete" /* 653 */;
import stackGet from "stackGet" /* 654 */;
import stackHas from "stackHas" /* 655 */;
import stackSet from "stackSet" /* 656 */;

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
