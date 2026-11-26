// Module ID: 15591
// Function ID: 15592
// Dependencies: [15557, 15578, 15592, 15602, 15603]

// Module 15591
import _mod15557 from "module_15557" /* 15557 */;
import _mod15578 from "module_15578" /* 15578 */;
import f2 from "f" /* 15592 */;
import _mod15602 from "module_15602" /* 15602 */;
import _mod15603 from "module_15603" /* 15603 */;

function ownKeys(arg0) {
  const obj = f2;
  const fResult = obj.f(_mod15602(arg0));
  const f = _mod15603.f;
  let tmp2 = fResult;
  if (f) {
    tmp2 = closure_2(fResult, f(arg0));
  }
  return tmp2;
}
let closure_2 = _mod15557([].concat);
_mod15578("Reflect", "ownKeys") || ownKeys;

export default _mod15578("Reflect", "ownKeys") || ownKeys;
