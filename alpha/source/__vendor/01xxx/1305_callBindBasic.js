// Module ID: 1305
// Function ID: 1306
// Name: callBindBasic
// Dependencies: [1295, 1306, 1308, 1310]

// Module 1305 (callBindBasic)
import _mod1295 from "module_1295" /* 1295 */;
import _mod1306 from "module_1306" /* 1306 */;
import bind from "bind" /* 1308 */;
import _mod1310 from "module_1310" /* 1310 */;


export default function callBindBasic(items) {
  if (items.length >= 1) {
    if (typeof items[0] === "function") {
      const tmp4 = _mod1306;
      const tmp5 = bind;
      return tmp4(tmp5, _mod1310, items);
    }
  }
  const tmp = new _mod1295("a function is required");
  throw tmp;
};
