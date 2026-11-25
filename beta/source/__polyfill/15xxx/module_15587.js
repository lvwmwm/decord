// Module ID: 15587
// Function ID: 15588
// Dependencies: [15553, 15574, 15588, 15598, 15599]

// Module 15587
import _mod15553 from "module_15553" /* 15553 */;
import _mod15574 from "module_15574" /* 15574 */;
import f2 from "f" /* 15588 */;
import _mod15598 from "module_15598" /* 15598 */;
import _mod15599 from "module_15599" /* 15599 */;

function ownKeys(arg0) {
  const obj = f2;
  const fResult = obj.f(_mod15598(arg0));
  const f = _mod15599.f;
  let tmp2 = fResult;
  if (f) {
    tmp2 = closure_2(fResult, f(arg0));
  }
  return tmp2;
}
let closure_2 = _mod15553([].concat);
_mod15574("Reflect", "ownKeys") || ownKeys;

export default _mod15574("Reflect", "ownKeys") || ownKeys;
