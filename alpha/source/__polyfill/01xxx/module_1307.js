// Module ID: 1307
// Function ID: 1308
// Dependencies: [1308, 1309, 1311, 1312]

// Module 1307
import bind from "bind" /* 1309 */;
import _mod1311 from "module_1311" /* 1311 */;
import _mod1312 from "module_1312" /* 1312 */;
import apply_mod from "module_1308" /* 1308 */;

let apply = apply_mod;
if (!apply) {
  const _module1 = bind;
  const call = _module1.call;
  const _module2 = _mod1311;
  apply = call(_module2, _mod1312);
}

export default apply;
