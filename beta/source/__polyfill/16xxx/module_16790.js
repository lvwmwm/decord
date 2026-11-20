// Module ID: 16790
// Function ID: 16791
// Dependencies: [16756, 16777, 16791, 16801, 16802]

// Module 16790
import _mod16756 from "module_16756" /* 16756 */;
import _mod16777 from "module_16777" /* 16777 */;
import f2 from "f" /* 16791 */;
import _mod16801 from "module_16801" /* 16801 */;
import _mod16802 from "module_16802" /* 16802 */;

function ownKeys(arg0) {
  const obj = f2;
  const fResult = obj.f(_mod16801(arg0));
  const f = _mod16802.f;
  let tmp2 = fResult;
  if (f) {
    tmp2 = closure_2(fResult, f(arg0));
  }
  return tmp2;
}
let closure_2 = _mod16756([].concat);
_mod16777("Reflect", "ownKeys") || ownKeys;

export default _mod16777("Reflect", "ownKeys") || ownKeys;
