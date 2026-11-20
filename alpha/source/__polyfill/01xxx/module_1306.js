// Module ID: 1306
// Function ID: 1307
// Dependencies: [1307, 1308, 1310, 1311]

// Module 1306
import bind from "bind" /* 1308 */;
import _mod1310 from "module_1310" /* 1310 */;
import _mod1311 from "module_1311" /* 1311 */;
import apply_mod from "module_1307" /* 1307 */;

let apply = apply_mod;
if (!apply) {
  const _module1 = bind;
  const call = _module1.call;
  const _module2 = _mod1310;
  apply = call(_module2, _mod1311);
}

export default apply;
