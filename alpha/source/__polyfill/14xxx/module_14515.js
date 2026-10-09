// Module ID: 14515
// Function ID: 14516
// Dependencies: [14481, 14502, 14516, 14526, 14527]

// Module 14515
import _mod14481 from "module_14481" /* 14481 */;
import _mod14502 from "module_14502" /* 14502 */;
import f2 from "f" /* 14516 */;
import _mod14526 from "module_14526" /* 14526 */;
import _mod14527 from "module_14527" /* 14527 */;

function ownKeys(arg0) {
  const obj = f2;
  const fResult = obj.f(_mod14526(arg0));
  const f = _mod14527.f;
  let tmp2 = fResult;
  if (f) {
    tmp2 = closure_2(fResult, f(arg0));
  }
  return tmp2;
}
let closure_2 = _mod14481([].concat);
_mod14502("Reflect", "ownKeys") || ownKeys;

export default _mod14502("Reflect", "ownKeys") || ownKeys;
