// Module ID: 1291
// Function ID: 1292
// Name: callBindBasic
// Dependencies: [1281, 1292, 1294, 1296]

// Module 1291 (callBindBasic)
import _mod1281 from "module_1281" /* 1281 */;
import _mod1292 from "module_1292" /* 1292 */;
import bind from "bind" /* 1294 */;
import _mod1296 from "module_1296" /* 1296 */;


export default function callBindBasic(items) {
  if (items.length >= 1) {
    if (typeof items[0] === "function") {
      const tmp4 = _mod1292;
      return tmp4(bind, _mod1296, items);
    }
  }
  throw new _mod1281("a function is required");
};
