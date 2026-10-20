// Module ID: 15393
// Function ID: 15394
// Dependencies: [15359, 15380, 15394, 15404, 15405]

// Module 15393
import _mod15359 from "module_15359" /* 15359 */;
import _mod15380 from "module_15380" /* 15380 */;
import f2 from "f" /* 15394 */;
import _mod15404 from "module_15404" /* 15404 */;
import _mod15405 from "module_15405" /* 15405 */;

function ownKeys(arg0) {
  const obj = f2;
  const fResult = obj.f(_mod15404(arg0));
  const f = _mod15405.f;
  let tmp2 = fResult;
  if (f) {
    tmp2 = closure_2(fResult, f(arg0));
  }
  return tmp2;
}
let closure_2 = _mod15359([].concat);
_mod15380("Reflect", "ownKeys") || ownKeys;

export default _mod15380("Reflect", "ownKeys") || ownKeys;
