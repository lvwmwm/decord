// Module ID: 14100
// Function ID: 14101
// Dependencies: [14066, 14087, 14101, 14111, 14112]

// Module 14100
import _mod14066 from "module_14066" /* 14066 */;
import _mod14087 from "module_14087" /* 14087 */;
import f2 from "f" /* 14101 */;
import _mod14111 from "module_14111" /* 14111 */;
import _mod14112 from "module_14112" /* 14112 */;

function ownKeys(arg0) {
  const obj = f2;
  const fResult = obj.f(_mod14111(arg0));
  const f = _mod14112.f;
  let tmp2 = fResult;
  if (f) {
    tmp2 = closure_2(fResult, f(arg0));
  }
  return tmp2;
}
let closure_2 = _mod14066([].concat);
_mod14087("Reflect", "ownKeys") || ownKeys;

export default _mod14087("Reflect", "ownKeys") || ownKeys;
