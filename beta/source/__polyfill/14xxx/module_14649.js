// Module ID: 14649
// Function ID: 14650
// Dependencies: [14615, 14636, 14650, 14660, 14661]

// Module 14649
import _mod14615 from "module_14615" /* 14615 */;
import _mod14636 from "module_14636" /* 14636 */;
import f2 from "f" /* 14650 */;
import _mod14660 from "module_14660" /* 14660 */;
import _mod14661 from "module_14661" /* 14661 */;

let closure_2 = _mod14615([].concat);

export default _mod14636("Reflect", "ownKeys") || (function ownKeys(arg0) {
  const fResult = f2.f(_mod14660(arg0));
  const f = _mod14661.f;
  let tmp2 = fResult;
  if (f) {
    tmp2 = closure_2(fResult, f(arg0));
  }
  return tmp2;
});
