// Module ID: 5101
// Function ID: 5102
// Dependencies: [1281, 5049]

// Module 5101
import _mod1281 from "module_1281" /* 1281 */;
import _mod5049 from "module_5049" /* 5049 */;

let closure_2 = _mod1281("%Object.isExtensible%", true);

export default _mod1281("%Object.preventExtensions%", true) ? (function IsExtensible(arg0) {
  const tmp = _mod5049(arg0);
  let tmp2 = !tmp;
  if (!tmp) {
    tmp2 = closure_2(arg0);
  }
  return tmp2;
}) : (function IsExtensible(arg0) {
  return !_mod5049(arg0);
});
