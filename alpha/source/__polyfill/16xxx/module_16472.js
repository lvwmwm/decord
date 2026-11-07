// Module ID: 16472
// Function ID: 16473
// Dependencies: [16438, 16459, 16473, 16483, 16484]

// Module 16472
import _mod16438 from "module_16438" /* 16438 */;
import _mod16459 from "module_16459" /* 16459 */;
import f2 from "f" /* 16473 */;
import _mod16483 from "module_16483" /* 16483 */;
import _mod16484 from "module_16484" /* 16484 */;

function ownKeys(arg0) {
  const obj = f2;
  const fResult = obj.f(_mod16483(arg0));
  const f = _mod16484.f;
  let tmp2 = fResult;
  if (f) {
    tmp2 = closure_2(fResult, f(arg0));
  }
  return tmp2;
}
let closure_2 = _mod16438([].concat);
_mod16459("Reflect", "ownKeys") || ownKeys;

export default _mod16459("Reflect", "ownKeys") || ownKeys;
