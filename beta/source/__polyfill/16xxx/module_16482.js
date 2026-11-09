// Module ID: 16482
// Function ID: 16483
// Dependencies: [16448, 16469, 16483, 16493, 16494]

// Module 16482
import _mod16448 from "module_16448" /* 16448 */;
import _mod16469 from "module_16469" /* 16469 */;
import f2 from "f" /* 16483 */;
import _mod16493 from "module_16493" /* 16493 */;
import _mod16494 from "module_16494" /* 16494 */;

function ownKeys(arg0) {
  const obj = f2;
  const fResult = obj.f(_mod16493(arg0));
  const f = _mod16494.f;
  let tmp2 = fResult;
  if (f) {
    tmp2 = closure_2(fResult, f(arg0));
  }
  return tmp2;
}
let closure_2 = _mod16448([].concat);
_mod16469("Reflect", "ownKeys") || ownKeys;

export default _mod16469("Reflect", "ownKeys") || ownKeys;
