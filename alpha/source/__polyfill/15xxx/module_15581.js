// Module ID: 15581
// Function ID: 15582
// Dependencies: [15547, 15568, 15582, 15592, 15593]

// Module 15581
import _mod15547 from "module_15547" /* 15547 */;
import _mod15568 from "module_15568" /* 15568 */;
import f2 from "f" /* 15582 */;
import _mod15592 from "module_15592" /* 15592 */;
import _mod15593 from "module_15593" /* 15593 */;

function ownKeys(arg0) {
  const obj = f2;
  const fResult = obj.f(_mod15592(arg0));
  const f = _mod15593.f;
  let tmp2 = fResult;
  if (f) {
    tmp2 = closure_2(fResult, f(arg0));
  }
  return tmp2;
}
let closure_2 = _mod15547([].concat);
_mod15568("Reflect", "ownKeys") || ownKeys;

export default _mod15568("Reflect", "ownKeys") || ownKeys;
