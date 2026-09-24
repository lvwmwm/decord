// Module ID: 14659
// Function ID: 14660
// Dependencies: [14625, 14646, 14660, 14670, 14671]

// Module 14659
import _mod14625 from "module_14625" /* 14625 */;
import _mod14646 from "module_14646" /* 14646 */;
import f2 from "f" /* 14660 */;
import _mod14670 from "module_14670" /* 14670 */;
import _mod14671 from "module_14671" /* 14671 */;

let closure_2 = _mod14625([].concat);

export default _mod14646("Reflect", "ownKeys") || (function ownKeys(arg0) {
  const fResult = f2.f(_mod14670(arg0));
  const f = _mod14671.f;
  let tmp2 = fResult;
  if (f) {
    tmp2 = closure_2(fResult, f(arg0));
  }
  return tmp2;
});
