// Module ID: 15586
// Function ID: 15587
// Dependencies: [15552, 15573, 15587, 15597, 15598]

// Module 15586
import _mod15552 from "module_15552" /* 15552 */;
import _mod15573 from "module_15573" /* 15573 */;
import f2 from "f" /* 15587 */;
import _mod15597 from "module_15597" /* 15597 */;
import _mod15598 from "module_15598" /* 15598 */;

function ownKeys(arg0) {
  const obj = f2;
  const fResult = obj.f(_mod15597(arg0));
  const f = _mod15598.f;
  let tmp2 = fResult;
  if (f) {
    tmp2 = closure_2(fResult, f(arg0));
  }
  return tmp2;
}
let closure_2 = _mod15552([].concat);
_mod15573("Reflect", "ownKeys") || ownKeys;

export default _mod15573("Reflect", "ownKeys") || ownKeys;
