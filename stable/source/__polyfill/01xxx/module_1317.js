// Module ID: 1317
// Function ID: 1318
// Dependencies: [1318, 1319, 1321, 1322]

// Module 1317
import bind from "bind" /* 1319 */;
import _mod1321 from "module_1321" /* 1321 */;
import _mod1322 from "module_1322" /* 1322 */;
import apply_mod from "module_1318" /* 1318 */;

let apply = apply_mod;
if (!apply) {
  const _module1 = bind;
  const call = _module1.call;
  const _module2 = _mod1321;
  apply = call(_module2, _mod1322);
}

export default apply;
