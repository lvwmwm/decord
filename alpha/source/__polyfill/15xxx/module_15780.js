// Module ID: 15780
// Function ID: 15781
// Dependencies: [15746, 15767, 15781, 15791, 15792]

// Module 15780
import _mod15746 from "module_15746" /* 15746 */;
import _mod15767 from "module_15767" /* 15767 */;
import f2 from "f" /* 15781 */;
import _mod15791 from "module_15791" /* 15791 */;
import _mod15792 from "module_15792" /* 15792 */;

function ownKeys(arg0) {
  const obj = f2;
  const fResult = obj.f(_mod15791(arg0));
  const f = _mod15792.f;
  let tmp2 = fResult;
  if (f) {
    tmp2 = closure_2(fResult, f(arg0));
  }
  return tmp2;
}
let closure_2 = _mod15746([].concat);
_mod15767("Reflect", "ownKeys") || ownKeys;

export default _mod15767("Reflect", "ownKeys") || ownKeys;
