// Module ID: 5071
// Function ID: 5072
// Dependencies: [1285, 5019]

// Module 5071
import _mod1285 from "module_1285" /* 1285 */;
import _mod5019 from "module_5019" /* 5019 */;

let closure_2 = _mod1285("%Object.isExtensible%", true);

export default _mod1285("%Object.preventExtensions%", true) ? (function IsExtensible(arg0) {
  const tmp = _mod5019(arg0);
  let tmp2 = !tmp;
  if (!tmp) {
    tmp2 = closure_2(arg0);
  }
  return tmp2;
}) : (function IsExtensible(arg0) {
  return !_mod5019(arg0);
});
