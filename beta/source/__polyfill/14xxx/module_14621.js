// Module ID: 14621
// Function ID: 14622
// Dependencies: [14587, 14608, 14622, 14632, 14633]

// Module 14621
import _mod14587 from "module_14587" /* 14587 */;
import _mod14608 from "module_14608" /* 14608 */;
import f2 from "f" /* 14622 */;
import _mod14632 from "module_14632" /* 14632 */;
import _mod14633 from "module_14633" /* 14633 */;

let closure_2 = _mod14587([].concat);

export default _mod14608("Reflect", "ownKeys") || (function ownKeys(arg0) {
  const fResult = f2.f(_mod14632(arg0));
  const f = _mod14633.f;
  let tmp2 = fResult;
  if (f) {
    tmp2 = closure_2(fResult, f(arg0));
  }
  return tmp2;
});
