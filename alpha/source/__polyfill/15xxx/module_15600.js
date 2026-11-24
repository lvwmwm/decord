// Module ID: 15600
// Function ID: 15601
// Dependencies: [15566, 15587, 15601, 15611, 15612]

// Module 15600
import _mod15566 from "module_15566" /* 15566 */;
import _mod15587 from "module_15587" /* 15587 */;
import f2 from "f" /* 15601 */;
import _mod15611 from "module_15611" /* 15611 */;
import _mod15612 from "module_15612" /* 15612 */;

function ownKeys(arg0) {
  const obj = f2;
  const fResult = obj.f(_mod15611(arg0));
  const f = _mod15612.f;
  let tmp2 = fResult;
  if (f) {
    tmp2 = closure_2(fResult, f(arg0));
  }
  return tmp2;
}
let closure_2 = _mod15566([].concat);
_mod15587("Reflect", "ownKeys") || ownKeys;

export default _mod15587("Reflect", "ownKeys") || ownKeys;
