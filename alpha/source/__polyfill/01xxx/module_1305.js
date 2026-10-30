// Module ID: 1305
// Function ID: 1306
// Dependencies: [1306, 1307, 1309, 1310]

// Module 1305
import bind from "bind" /* 1307 */;
import _mod1309 from "module_1309" /* 1309 */;
import _mod1310 from "module_1310" /* 1310 */;
import apply_mod from "module_1306" /* 1306 */;

let apply = apply_mod;
if (!apply) {
  const _module1 = bind;
  const call = _module1.call;
  const _module2 = _mod1309;
  apply = call(_module2, _mod1310);
}

export default apply;
