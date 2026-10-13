// Module ID: 14913
// Function ID: 14914
// Dependencies: [14879, 14900, 14914, 14924, 14925]

// Module 14913
import _mod14879 from "module_14879" /* 14879 */;
import _mod14900 from "module_14900" /* 14900 */;
import f2 from "f" /* 14914 */;
import _mod14924 from "module_14924" /* 14924 */;
import _mod14925 from "module_14925" /* 14925 */;

function ownKeys(arg0) {
  const obj = f2;
  const fResult = obj.f(_mod14924(arg0));
  const f = _mod14925.f;
  let tmp2 = fResult;
  if (f) {
    tmp2 = closure_2(fResult, f(arg0));
  }
  return tmp2;
}
let closure_2 = _mod14879([].concat);
_mod14900("Reflect", "ownKeys") || ownKeys;

export default _mod14900("Reflect", "ownKeys") || ownKeys;
