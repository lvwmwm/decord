// Module ID: 15585
// Function ID: 15586
// Dependencies: [15551, 15572, 15586, 15596, 15597]

// Module 15585
import _mod15551 from "module_15551" /* 15551 */;
import _mod15572 from "module_15572" /* 15572 */;
import f2 from "f" /* 15586 */;
import _mod15596 from "module_15596" /* 15596 */;
import _mod15597 from "module_15597" /* 15597 */;

function ownKeys(arg0) {
  const obj = f2;
  const fResult = obj.f(_mod15596(arg0));
  const f = _mod15597.f;
  let tmp2 = fResult;
  if (f) {
    tmp2 = closure_2(fResult, f(arg0));
  }
  return tmp2;
}
let closure_2 = _mod15551([].concat);
_mod15572("Reflect", "ownKeys") || ownKeys;

export default _mod15572("Reflect", "ownKeys") || ownKeys;
