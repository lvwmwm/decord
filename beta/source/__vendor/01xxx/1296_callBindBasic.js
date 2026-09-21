// Module ID: 1296
// Function ID: 1297
// Name: callBindBasic
// Dependencies: [1286, 1297, 1299, 1301]

// Module 1296 (callBindBasic)
import _mod1286 from "module_1286" /* 1286 */;
import _mod1297 from "module_1297" /* 1297 */;
import bind from "bind" /* 1299 */;
import _mod1301 from "module_1301" /* 1301 */;


export default function callBindBasic(items) {
  if (items.length >= 1) {
    if (typeof items[0] === "function") {
      const tmp4 = _mod1297;
      return tmp4(bind, _mod1301, items);
    }
  }
  throw new _mod1286("a function is required");
};
