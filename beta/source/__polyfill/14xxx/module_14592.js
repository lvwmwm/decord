// Module ID: 14592
// Function ID: 14593
// Dependencies: [14558, 14579, 14593, 14603, 14604]

// Module 14592
import _mod14558 from "module_14558" /* 14558 */;
import _mod14579 from "module_14579" /* 14579 */;
import f2 from "f" /* 14593 */;
import _mod14603 from "module_14603" /* 14603 */;
import _mod14604 from "module_14604" /* 14604 */;

function ownKeys(arg0) {
  const obj = f2;
  const fResult = obj.f(_mod14603(arg0));
  const f = _mod14604.f;
  let tmp2 = fResult;
  if (f) {
    tmp2 = closure_2(fResult, f(arg0));
  }
  return tmp2;
}
let closure_2 = _mod14558([].concat);
_mod14579("Reflect", "ownKeys") || ownKeys;

export default _mod14579("Reflect", "ownKeys") || ownKeys;
