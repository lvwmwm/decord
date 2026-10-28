// Module ID: 15848
// Function ID: 15849
// Dependencies: [15814, 15835, 15849, 15859, 15860]

// Module 15848
import _mod15814 from "module_15814" /* 15814 */;
import _mod15835 from "module_15835" /* 15835 */;
import f2 from "f" /* 15849 */;
import _mod15859 from "module_15859" /* 15859 */;
import _mod15860 from "module_15860" /* 15860 */;

function ownKeys(arg0) {
  const obj = f2;
  const fResult = obj.f(_mod15859(arg0));
  const f = _mod15860.f;
  let tmp2 = fResult;
  if (f) {
    tmp2 = closure_2(fResult, f(arg0));
  }
  return tmp2;
}
let closure_2 = _mod15814([].concat);
_mod15835("Reflect", "ownKeys") || ownKeys;

export default _mod15835("Reflect", "ownKeys") || ownKeys;
