// Module ID: 15620
// Function ID: 15621
// Dependencies: [15586, 15607, 15621, 15631, 15632]

// Module 15620
import _mod15586 from "module_15586" /* 15586 */;
import _mod15607 from "module_15607" /* 15607 */;
import f2 from "f" /* 15621 */;
import _mod15631 from "module_15631" /* 15631 */;
import _mod15632 from "module_15632" /* 15632 */;

function ownKeys(arg0) {
  const obj = f2;
  const fResult = obj.f(_mod15631(arg0));
  const f = _mod15632.f;
  let tmp2 = fResult;
  if (f) {
    tmp2 = closure_2(fResult, f(arg0));
  }
  return tmp2;
}
let closure_2 = _mod15586([].concat);
_mod15607("Reflect", "ownKeys") || ownKeys;

export default _mod15607("Reflect", "ownKeys") || ownKeys;
