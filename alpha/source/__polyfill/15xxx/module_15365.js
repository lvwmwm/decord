// Module ID: 15365
// Function ID: 15366
// Dependencies: [15331, 15352, 15366, 15376, 15377]

// Module 15365
import _mod15331 from "module_15331" /* 15331 */;
import _mod15352 from "module_15352" /* 15352 */;
import f2 from "f" /* 15366 */;
import _mod15376 from "module_15376" /* 15376 */;
import _mod15377 from "module_15377" /* 15377 */;

function ownKeys(arg0) {
  const obj = f2;
  const fResult = obj.f(_mod15376(arg0));
  const f = _mod15377.f;
  let tmp2 = fResult;
  if (f) {
    tmp2 = closure_2(fResult, f(arg0));
  }
  return tmp2;
}
let closure_2 = _mod15331([].concat);
_mod15352("Reflect", "ownKeys") || ownKeys;

export default _mod15352("Reflect", "ownKeys") || ownKeys;
