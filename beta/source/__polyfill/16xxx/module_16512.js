// Module ID: 16512
// Function ID: 16513
// Dependencies: [16478, 16499, 16513, 16523, 16524]

// Module 16512
import _mod16478 from "module_16478" /* 16478 */;
import _mod16499 from "module_16499" /* 16499 */;
import f2 from "f" /* 16513 */;
import _mod16523 from "module_16523" /* 16523 */;
import _mod16524 from "module_16524" /* 16524 */;

function ownKeys(arg0) {
  const obj = f2;
  const fResult = obj.f(_mod16523(arg0));
  const f = _mod16524.f;
  let tmp2 = fResult;
  if (f) {
    tmp2 = closure_2(fResult, f(arg0));
  }
  return tmp2;
}
let closure_2 = _mod16478([].concat);
_mod16499("Reflect", "ownKeys") || ownKeys;

export default _mod16499("Reflect", "ownKeys") || ownKeys;
