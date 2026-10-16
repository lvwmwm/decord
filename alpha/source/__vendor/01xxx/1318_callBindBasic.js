// Module ID: 1318
// Function ID: 1319
// Name: callBindBasic
// Dependencies: [1308, 1319, 1321, 1323]

// Module 1318 (callBindBasic)
import _mod1308 from "module_1308" /* 1308 */;
import _mod1319 from "module_1319" /* 1319 */;
import bind from "bind" /* 1321 */;
import _mod1323 from "module_1323" /* 1323 */;


export default function callBindBasic(items) {
  if (items.length >= 1) {
    if (typeof items[0] === "function") {
      const tmp4 = _mod1319;
      const tmp5 = bind;
      return tmp4(tmp5, _mod1323, items);
    }
  }
  const tmp = new _mod1308("a function is required");
  throw tmp;
};
