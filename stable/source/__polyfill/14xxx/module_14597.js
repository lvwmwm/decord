// Module ID: 14597
// Function ID: 14598
// Dependencies: [14563, 14584, 14598, 14608, 14609]

// Module 14597
import _mod14563 from "module_14563" /* 14563 */;
import _mod14584 from "module_14584" /* 14584 */;
import f2 from "f" /* 14598 */;
import _mod14608 from "module_14608" /* 14608 */;
import _mod14609 from "module_14609" /* 14609 */;

function ownKeys(arg0) {
  const obj = f2;
  const fResult = obj.f(_mod14608(arg0));
  const f = _mod14609.f;
  let tmp2 = fResult;
  if (f) {
    tmp2 = closure_2(fResult, f(arg0));
  }
  return tmp2;
}
let closure_2 = _mod14563([].concat);
_mod14584("Reflect", "ownKeys") || ownKeys;

export default _mod14584("Reflect", "ownKeys") || ownKeys;
