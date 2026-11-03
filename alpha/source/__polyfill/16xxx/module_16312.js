// Module ID: 16312
// Function ID: 16313
// Dependencies: [16278, 16299, 16313, 16323, 16324]

// Module 16312
import _mod16278 from "module_16278" /* 16278 */;
import _mod16299 from "module_16299" /* 16299 */;
import f2 from "f" /* 16313 */;
import _mod16323 from "module_16323" /* 16323 */;
import _mod16324 from "module_16324" /* 16324 */;

function ownKeys(arg0) {
  const obj = f2;
  const fResult = obj.f(_mod16323(arg0));
  const f = _mod16324.f;
  let tmp2 = fResult;
  if (f) {
    tmp2 = closure_2(fResult, f(arg0));
  }
  return tmp2;
}
let closure_2 = _mod16278([].concat);
_mod16299("Reflect", "ownKeys") || ownKeys;

export default _mod16299("Reflect", "ownKeys") || ownKeys;
