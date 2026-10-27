// Module ID: 1319
// Function ID: 1320
// Dependencies: [1320, 1321, 1323, 1324]

// Module 1319
import bind from "bind" /* 1321 */;
import _mod1323 from "module_1323" /* 1323 */;
import _mod1324 from "module_1324" /* 1324 */;
import apply_mod from "module_1320" /* 1320 */;

let apply = apply_mod;
if (!apply) {
  const _module1 = bind;
  const call = _module1.call;
  const _module2 = _mod1323;
  apply = call(_module2, _mod1324);
}

export default apply;
