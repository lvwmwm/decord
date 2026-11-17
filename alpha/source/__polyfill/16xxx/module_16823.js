// Module ID: 16823
// Function ID: 16824
// Dependencies: [16789, 16810, 16824, 16834, 16835]

// Module 16823
import _mod16789 from "module_16789" /* 16789 */;
import _mod16810 from "module_16810" /* 16810 */;
import f2 from "f" /* 16824 */;
import _mod16834 from "module_16834" /* 16834 */;
import _mod16835 from "module_16835" /* 16835 */;

function ownKeys(arg0) {
  const obj = f2;
  const fResult = obj.f(_mod16834(arg0));
  const f = _mod16835.f;
  let tmp2 = fResult;
  if (f) {
    tmp2 = closure_2(fResult, f(arg0));
  }
  return tmp2;
}
let closure_2 = _mod16789([].concat);
_mod16810("Reflect", "ownKeys") || ownKeys;

export default _mod16810("Reflect", "ownKeys") || ownKeys;
