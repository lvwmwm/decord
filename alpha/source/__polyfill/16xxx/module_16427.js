// Module ID: 16427
// Function ID: 16428
// Dependencies: [16393, 16414, 16428, 16438, 16439]

// Module 16427
import _mod16393 from "module_16393" /* 16393 */;
import _mod16414 from "module_16414" /* 16414 */;
import f2 from "f" /* 16428 */;
import _mod16438 from "module_16438" /* 16438 */;
import _mod16439 from "module_16439" /* 16439 */;

function ownKeys(arg0) {
  const obj = f2;
  const fResult = obj.f(_mod16438(arg0));
  const f = _mod16439.f;
  let tmp2 = fResult;
  if (f) {
    tmp2 = closure_2(fResult, f(arg0));
  }
  return tmp2;
}
let closure_2 = _mod16393([].concat);
_mod16414("Reflect", "ownKeys") || ownKeys;

export default _mod16414("Reflect", "ownKeys") || ownKeys;
