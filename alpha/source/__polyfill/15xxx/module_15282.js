// Module ID: 15282
// Function ID: 15283
// Dependencies: [15248, 15269, 15283, 15293, 15294]

// Module 15282
import _mod15248 from "module_15248" /* 15248 */;
import _mod15269 from "module_15269" /* 15269 */;
import f2 from "f" /* 15283 */;
import _mod15293 from "module_15293" /* 15293 */;
import _mod15294 from "module_15294" /* 15294 */;

function ownKeys(arg0) {
  const obj = f2;
  const fResult = obj.f(_mod15293(arg0));
  const f = _mod15294.f;
  let tmp2 = fResult;
  if (f) {
    tmp2 = closure_2(fResult, f(arg0));
  }
  return tmp2;
}
let closure_2 = _mod15248([].concat);
_mod15269("Reflect", "ownKeys") || ownKeys;

export default _mod15269("Reflect", "ownKeys") || ownKeys;
