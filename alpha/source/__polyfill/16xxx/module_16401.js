// Module ID: 16401
// Function ID: 16402
// Dependencies: [16367, 16388, 16402, 16412, 16413]

// Module 16401
import _mod16367 from "module_16367" /* 16367 */;
import _mod16388 from "module_16388" /* 16388 */;
import f2 from "f" /* 16402 */;
import _mod16412 from "module_16412" /* 16412 */;
import _mod16413 from "module_16413" /* 16413 */;

function ownKeys(arg0) {
  const obj = f2;
  const fResult = obj.f(_mod16412(arg0));
  const f = _mod16413.f;
  let tmp2 = fResult;
  if (f) {
    tmp2 = closure_2(fResult, f(arg0));
  }
  return tmp2;
}
let closure_2 = _mod16367([].concat);
_mod16388("Reflect", "ownKeys") || ownKeys;

export default _mod16388("Reflect", "ownKeys") || ownKeys;
