// Module ID: 15577
// Function ID: 15578
// Dependencies: [15543, 15564, 15578, 15588, 15589]

// Module 15577
import _mod15543 from "module_15543" /* 15543 */;
import _mod15564 from "module_15564" /* 15564 */;
import f2 from "f" /* 15578 */;
import _mod15588 from "module_15588" /* 15588 */;
import _mod15589 from "module_15589" /* 15589 */;

function ownKeys(arg0) {
  const obj = f2;
  const fResult = obj.f(_mod15588(arg0));
  const f = _mod15589.f;
  let tmp2 = fResult;
  if (f) {
    tmp2 = closure_2(fResult, f(arg0));
  }
  return tmp2;
}
let closure_2 = _mod15543([].concat);
_mod15564("Reflect", "ownKeys") || ownKeys;

export default _mod15564("Reflect", "ownKeys") || ownKeys;
