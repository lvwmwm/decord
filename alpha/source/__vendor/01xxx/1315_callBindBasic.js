// Module ID: 1315
// Function ID: 1316
// Name: callBindBasic
// Dependencies: [1305, 1316, 1318, 1320]

// Module 1315 (callBindBasic)
import _mod1305 from "module_1305" /* 1305 */;
import _mod1316 from "module_1316" /* 1316 */;
import bind from "bind" /* 1318 */;
import _mod1320 from "module_1320" /* 1320 */;


export default function callBindBasic(items) {
  if (items.length >= 1) {
    if (typeof items[0] === "function") {
      const tmp4 = _mod1316;
      const tmp5 = bind;
      return tmp4(tmp5, _mod1320, items);
    }
  }
  const tmp = new _mod1305("a function is required");
  throw tmp;
};
