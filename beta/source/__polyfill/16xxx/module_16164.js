// Module ID: 16164
// Function ID: 16165
// Dependencies: [16130, 16151, 16165, 16175, 16176]

// Module 16164
import _mod16130 from "module_16130" /* 16130 */;
import _mod16151 from "module_16151" /* 16151 */;
import f2 from "f" /* 16165 */;
import _mod16175 from "module_16175" /* 16175 */;
import _mod16176 from "module_16176" /* 16176 */;

function ownKeys(arg0) {
  const obj = f2;
  const fResult = obj.f(_mod16175(arg0));
  const f = _mod16176.f;
  let tmp2 = fResult;
  if (f) {
    tmp2 = closure_2(fResult, f(arg0));
  }
  return tmp2;
}
let closure_2 = _mod16130([].concat);
_mod16151("Reflect", "ownKeys") || ownKeys;

export default _mod16151("Reflect", "ownKeys") || ownKeys;
