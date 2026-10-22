// Module ID: 15527
// Function ID: 15528
// Dependencies: [15493, 15514, 15528, 15538, 15539]

// Module 15527
import _mod15493 from "module_15493" /* 15493 */;
import _mod15514 from "module_15514" /* 15514 */;
import f2 from "f" /* 15528 */;
import _mod15538 from "module_15538" /* 15538 */;
import _mod15539 from "module_15539" /* 15539 */;

function ownKeys(arg0) {
  const obj = f2;
  const fResult = obj.f(_mod15538(arg0));
  const f = _mod15539.f;
  let tmp2 = fResult;
  if (f) {
    tmp2 = closure_2(fResult, f(arg0));
  }
  return tmp2;
}
let closure_2 = _mod15493([].concat);
_mod15514("Reflect", "ownKeys") || ownKeys;

export default _mod15514("Reflect", "ownKeys") || ownKeys;
