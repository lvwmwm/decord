// Module ID: 16509
// Function ID: 16510
// Dependencies: [16475, 16496, 16510, 16520, 16521]

// Module 16509
import _mod16475 from "module_16475" /* 16475 */;
import _mod16496 from "module_16496" /* 16496 */;
import f2 from "f" /* 16510 */;
import _mod16520 from "module_16520" /* 16520 */;
import _mod16521 from "module_16521" /* 16521 */;

function ownKeys(arg0) {
  const obj = f2;
  const fResult = obj.f(_mod16520(arg0));
  const f = _mod16521.f;
  let tmp2 = fResult;
  if (f) {
    tmp2 = closure_2(fResult, f(arg0));
  }
  return tmp2;
}
let closure_2 = _mod16475([].concat);
_mod16496("Reflect", "ownKeys") || ownKeys;

export default _mod16496("Reflect", "ownKeys") || ownKeys;
