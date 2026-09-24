// Module ID: 5103
// Function ID: 5104
// Dependencies: [1285, 5051]

// Module 5103
import _mod1285 from "module_1285" /* 1285 */;
import _mod5051 from "module_5051" /* 5051 */;

let closure_2 = _mod1285("%Object.isExtensible%", true);

export default _mod1285("%Object.preventExtensions%", true) ? (function IsExtensible(arg0) {
  const tmp = _mod5051(arg0);
  let tmp2 = !tmp;
  if (!tmp) {
    tmp2 = closure_2(arg0);
  }
  return tmp2;
}) : (function IsExtensible(arg0) {
  return !_mod5051(arg0);
});
