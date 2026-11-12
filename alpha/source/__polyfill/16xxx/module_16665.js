// Module ID: 16665
// Function ID: 16666
// Dependencies: [16631, 16652, 16666, 16676, 16677]

// Module 16665
import _mod16631 from "module_16631" /* 16631 */;
import _mod16652 from "module_16652" /* 16652 */;
import f2 from "f" /* 16666 */;
import _mod16676 from "module_16676" /* 16676 */;
import _mod16677 from "module_16677" /* 16677 */;

function ownKeys(arg0) {
  const obj = f2;
  const fResult = obj.f(_mod16676(arg0));
  const f = _mod16677.f;
  let tmp2 = fResult;
  if (f) {
    tmp2 = closure_2(fResult, f(arg0));
  }
  return tmp2;
}
let closure_2 = _mod16631([].concat);
_mod16652("Reflect", "ownKeys") || ownKeys;

export default _mod16652("Reflect", "ownKeys") || ownKeys;
