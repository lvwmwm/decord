// Module ID: 16514
// Function ID: 16515
// Dependencies: [16480, 16501, 16515, 16525, 16526]

// Module 16514
import _mod16480 from "module_16480" /* 16480 */;
import _mod16501 from "module_16501" /* 16501 */;
import f2 from "f" /* 16515 */;
import _mod16525 from "module_16525" /* 16525 */;
import _mod16526 from "module_16526" /* 16526 */;

function ownKeys(arg0) {
  const obj = f2;
  const fResult = obj.f(_mod16525(arg0));
  const f = _mod16526.f;
  let tmp2 = fResult;
  if (f) {
    tmp2 = closure_2(fResult, f(arg0));
  }
  return tmp2;
}
let closure_2 = _mod16480([].concat);
_mod16501("Reflect", "ownKeys") || ownKeys;

export default _mod16501("Reflect", "ownKeys") || ownKeys;
