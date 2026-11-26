// Module ID: 15773
// Function ID: 15774
// Dependencies: [15739, 15760, 15774, 15784, 15785]

// Module 15773
import _mod15739 from "module_15739" /* 15739 */;
import _mod15760 from "module_15760" /* 15760 */;
import f2 from "f" /* 15774 */;
import _mod15784 from "module_15784" /* 15784 */;
import _mod15785 from "module_15785" /* 15785 */;

function ownKeys(arg0) {
  const obj = f2;
  const fResult = obj.f(_mod15784(arg0));
  const f = _mod15785.f;
  let tmp2 = fResult;
  if (f) {
    tmp2 = closure_2(fResult, f(arg0));
  }
  return tmp2;
}
let closure_2 = _mod15739([].concat);
_mod15760("Reflect", "ownKeys") || ownKeys;

export default _mod15760("Reflect", "ownKeys") || ownKeys;
