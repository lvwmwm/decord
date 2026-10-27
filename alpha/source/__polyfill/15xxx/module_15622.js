// Module ID: 15622
// Function ID: 15623
// Dependencies: [15588, 15609, 15623, 15633, 15634]

// Module 15622
import _mod15588 from "module_15588" /* 15588 */;
import _mod15609 from "module_15609" /* 15609 */;
import f2 from "f" /* 15623 */;
import _mod15633 from "module_15633" /* 15633 */;
import _mod15634 from "module_15634" /* 15634 */;

function ownKeys(arg0) {
  const obj = f2;
  const fResult = obj.f(_mod15633(arg0));
  const f = _mod15634.f;
  let tmp2 = fResult;
  if (f) {
    tmp2 = closure_2(fResult, f(arg0));
  }
  return tmp2;
}
let closure_2 = _mod15588([].concat);
_mod15609("Reflect", "ownKeys") || ownKeys;

export default _mod15609("Reflect", "ownKeys") || ownKeys;
