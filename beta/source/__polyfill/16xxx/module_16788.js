// Module ID: 16788
// Function ID: 16789
// Dependencies: [16754, 16775, 16789, 16799, 16800]

// Module 16788
import _mod16754 from "module_16754" /* 16754 */;
import _mod16775 from "module_16775" /* 16775 */;
import f2 from "f" /* 16789 */;
import _mod16799 from "module_16799" /* 16799 */;
import _mod16800 from "module_16800" /* 16800 */;

function ownKeys(arg0) {
  const obj = f2;
  const fResult = obj.f(_mod16799(arg0));
  const f = _mod16800.f;
  let tmp2 = fResult;
  if (f) {
    tmp2 = closure_2(fResult, f(arg0));
  }
  return tmp2;
}
let closure_2 = _mod16754([].concat);
_mod16775("Reflect", "ownKeys") || ownKeys;

export default _mod16775("Reflect", "ownKeys") || ownKeys;
