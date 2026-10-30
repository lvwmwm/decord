// Module ID: 1304
// Function ID: 1305
// Name: callBindBasic
// Dependencies: [1294, 1305, 1307, 1309]

// Module 1304 (callBindBasic)
import _mod1294 from "module_1294" /* 1294 */;
import _mod1305 from "module_1305" /* 1305 */;
import bind from "bind" /* 1307 */;
import _mod1309 from "module_1309" /* 1309 */;


export default function callBindBasic(items) {
  if (items.length >= 1) {
    if (typeof items[0] === "function") {
      const tmp4 = _mod1305;
      const tmp5 = bind;
      return tmp4(tmp5, _mod1309, items);
    }
  }
  const tmp = new _mod1294("a function is required");
  throw tmp;
};
