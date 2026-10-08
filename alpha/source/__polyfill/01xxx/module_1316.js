// Module ID: 1316
// Function ID: 1317
// Dependencies: [1317, 1318, 1320, 1321]

// Module 1316
import bind from "bind" /* 1318 */;
import _mod1320 from "module_1320" /* 1320 */;
import _mod1321 from "module_1321" /* 1321 */;
import apply_mod from "module_1317" /* 1317 */;

let apply = apply_mod;
if (!apply) {
  const _module1 = bind;
  const call = _module1.call;
  const _module2 = _mod1320;
  apply = call(_module2, _mod1321);
}

export default apply;
