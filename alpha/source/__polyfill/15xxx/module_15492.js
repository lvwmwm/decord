// Module ID: 15492
// Function ID: 15493
// Dependencies: [15458, 15479, 15493, 15503, 15504]

// Module 15492
import _mod15458 from "module_15458" /* 15458 */;
import _mod15479 from "module_15479" /* 15479 */;
import f2 from "f" /* 15493 */;
import _mod15503 from "module_15503" /* 15503 */;
import _mod15504 from "module_15504" /* 15504 */;

function ownKeys(arg0) {
  const obj = f2;
  const fResult = obj.f(_mod15503(arg0));
  const f = _mod15504.f;
  let tmp2 = fResult;
  if (f) {
    tmp2 = closure_2(fResult, f(arg0));
  }
  return tmp2;
}
let closure_2 = _mod15458([].concat);
_mod15479("Reflect", "ownKeys") || ownKeys;

export default _mod15479("Reflect", "ownKeys") || ownKeys;
