// Module ID: 14419
// Function ID: 14420
// Dependencies: [14385, 14406, 14420, 14430, 14431]

// Module 14419
import _mod14385 from "module_14385" /* 14385 */;
import _mod14406 from "module_14406" /* 14406 */;
import f2 from "f" /* 14420 */;
import _mod14430 from "module_14430" /* 14430 */;
import _mod14431 from "module_14431" /* 14431 */;

function ownKeys(arg0) {
  const obj = f2;
  const fResult = obj.f(_mod14430(arg0));
  const f = _mod14431.f;
  let tmp2 = fResult;
  if (f) {
    tmp2 = closure_2(fResult, f(arg0));
  }
  return tmp2;
}
let closure_2 = _mod14385([].concat);
_mod14406("Reflect", "ownKeys") || ownKeys;

export default _mod14406("Reflect", "ownKeys") || ownKeys;
