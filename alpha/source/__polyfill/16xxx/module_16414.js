// Module ID: 16414
// Function ID: 16415
// Dependencies: [16380, 16401, 16415, 16425, 16426]

// Module 16414
import _mod16380 from "module_16380" /* 16380 */;
import _mod16401 from "module_16401" /* 16401 */;
import f2 from "f" /* 16415 */;
import _mod16425 from "module_16425" /* 16425 */;
import _mod16426 from "module_16426" /* 16426 */;

function ownKeys(arg0) {
  const obj = f2;
  const fResult = obj.f(_mod16425(arg0));
  const f = _mod16426.f;
  let tmp2 = fResult;
  if (f) {
    tmp2 = closure_2(fResult, f(arg0));
  }
  return tmp2;
}
let closure_2 = _mod16380([].concat);
_mod16401("Reflect", "ownKeys") || ownKeys;

export default _mod16401("Reflect", "ownKeys") || ownKeys;
