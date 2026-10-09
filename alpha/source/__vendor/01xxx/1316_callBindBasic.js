// Module ID: 1316
// Function ID: 1317
// Name: callBindBasic
// Dependencies: [1306, 1317, 1319, 1321]

// Module 1316 (callBindBasic)
import _mod1306 from "module_1306" /* 1306 */;
import _mod1317 from "module_1317" /* 1317 */;
import bind from "bind" /* 1319 */;
import _mod1321 from "module_1321" /* 1321 */;


export default function callBindBasic(items) {
  if (items.length >= 1) {
    if (typeof items[0] === "function") {
      const tmp4 = _mod1317;
      const tmp5 = bind;
      return tmp4(tmp5, _mod1321, items);
    }
  }
  const tmp = new _mod1306("a function is required");
  throw tmp;
};
