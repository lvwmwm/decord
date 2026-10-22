// Module ID: 15540
// Function ID: 15541
// Dependencies: [15506, 15527, 15541, 15551, 15552]

// Module 15540
import _mod15506 from "module_15506" /* 15506 */;
import _mod15527 from "module_15527" /* 15527 */;
import f2 from "f" /* 15541 */;
import _mod15551 from "module_15551" /* 15551 */;
import _mod15552 from "module_15552" /* 15552 */;

function ownKeys(arg0) {
  const obj = f2;
  const fResult = obj.f(_mod15551(arg0));
  const f = _mod15552.f;
  let tmp2 = fResult;
  if (f) {
    tmp2 = closure_2(fResult, f(arg0));
  }
  return tmp2;
}
let closure_2 = _mod15506([].concat);
_mod15527("Reflect", "ownKeys") || ownKeys;

export default _mod15527("Reflect", "ownKeys") || ownKeys;
