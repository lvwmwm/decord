// Module ID: 1304
// Function ID: 1305
// Dependencies: [1305, 1306, 1308, 1309]

// Module 1304
import bind from "bind" /* 1306 */;
import _mod1308 from "module_1308" /* 1308 */;
import _mod1309 from "module_1309" /* 1309 */;
import apply_mod from "module_1305" /* 1305 */;

let apply = apply_mod;
if (!apply) {
  const _module1 = bind;
  const call = _module1.call;
  const _module2 = _mod1308;
  apply = call(_module2, _mod1309);
}

export default apply;
