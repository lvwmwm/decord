// Module ID: 15456
// Function ID: 15457
// Dependencies: [15422, 15443, 15457, 15467, 15468]

// Module 15456
import _mod15422 from "module_15422" /* 15422 */;
import _mod15443 from "module_15443" /* 15443 */;
import f2 from "f" /* 15457 */;
import _mod15467 from "module_15467" /* 15467 */;
import _mod15468 from "module_15468" /* 15468 */;

function ownKeys(arg0) {
  const obj = f2;
  const fResult = obj.f(_mod15467(arg0));
  const f = _mod15468.f;
  let tmp2 = fResult;
  if (f) {
    tmp2 = closure_2(fResult, f(arg0));
  }
  return tmp2;
}
let closure_2 = _mod15422([].concat);
_mod15443("Reflect", "ownKeys") || ownKeys;

export default _mod15443("Reflect", "ownKeys") || ownKeys;
