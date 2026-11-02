// Module ID: 16169
// Function ID: 16170
// Dependencies: [16135, 16156, 16170, 16180, 16181]

// Module 16169
import _mod16135 from "module_16135" /* 16135 */;
import _mod16156 from "module_16156" /* 16156 */;
import f2 from "f" /* 16170 */;
import _mod16180 from "module_16180" /* 16180 */;
import _mod16181 from "module_16181" /* 16181 */;

function ownKeys(arg0) {
  const obj = f2;
  const fResult = obj.f(_mod16180(arg0));
  const f = _mod16181.f;
  let tmp2 = fResult;
  if (f) {
    tmp2 = closure_2(fResult, f(arg0));
  }
  return tmp2;
}
let closure_2 = _mod16135([].concat);
_mod16156("Reflect", "ownKeys") || ownKeys;

export default _mod16156("Reflect", "ownKeys") || ownKeys;
