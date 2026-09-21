// Module ID: 1292
// Function ID: 1293
// Name: callBindBasic
// Dependencies: [1282, 1293, 1295, 1297]

// Module 1292 (callBindBasic)
import _mod1282 from "module_1282" /* 1282 */;
import _mod1293 from "module_1293" /* 1293 */;
import bind from "bind" /* 1295 */;
import _mod1297 from "module_1297" /* 1297 */;


export default function callBindBasic(items) {
  if (items.length >= 1) {
    if (typeof items[0] === "function") {
      const tmp4 = _mod1293;
      return tmp4(bind, _mod1297, items);
    }
  }
  throw new _mod1282("a function is required");
};
