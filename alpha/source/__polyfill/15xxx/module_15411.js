// Module ID: 15411
// Function ID: 15412
// Dependencies: [15377, 15398, 15412, 15422, 15423]

// Module 15411
import _mod15377 from "module_15377" /* 15377 */;
import _mod15398 from "module_15398" /* 15398 */;
import f2 from "f" /* 15412 */;
import _mod15422 from "module_15422" /* 15422 */;
import _mod15423 from "module_15423" /* 15423 */;

function ownKeys(arg0) {
  const obj = f2;
  const fResult = obj.f(_mod15422(arg0));
  const f = _mod15423.f;
  let tmp2 = fResult;
  if (f) {
    tmp2 = closure_2(fResult, f(arg0));
  }
  return tmp2;
}
let closure_2 = _mod15377([].concat);
_mod15398("Reflect", "ownKeys") || ownKeys;

export default _mod15398("Reflect", "ownKeys") || ownKeys;
