// Module ID: 1306
// Function ID: 1307
// Name: callBindBasic
// Dependencies: [1296, 1307, 1309, 1311]

// Module 1306 (callBindBasic)
import _mod1296 from "module_1296" /* 1296 */;
import _mod1307 from "module_1307" /* 1307 */;
import bind from "bind" /* 1309 */;
import _mod1311 from "module_1311" /* 1311 */;


export default function callBindBasic(items) {
  if (items.length >= 1) {
    if (typeof items[0] === "function") {
      const tmp4 = _mod1307;
      const tmp5 = bind;
      return tmp4(tmp5, _mod1311, items);
    }
  }
  const tmp = new _mod1296("a function is required");
  throw tmp;
};
