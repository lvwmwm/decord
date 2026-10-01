// Module ID: 1293
// Function ID: 1294
// Dependencies: [1294, 1295, 1297, 1298]

// Module 1293
import bind from "bind" /* 1295 */;
import _mod1297 from "module_1297" /* 1297 */;
import _mod1298 from "module_1298" /* 1298 */;
import apply_mod from "module_1294" /* 1294 */;

let apply = apply_mod;
if (!apply) {
  const _module1 = bind;
  const call = _module1.call;
  const _module2 = _mod1297;
  apply = call(_module2, _mod1298);
}

export default apply;
