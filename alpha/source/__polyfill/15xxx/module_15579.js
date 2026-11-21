// Module ID: 15579
// Function ID: 15580
// Dependencies: [15545, 15566, 15580, 15590, 15591]

// Module 15579
import _mod15545 from "module_15545" /* 15545 */;
import _mod15566 from "module_15566" /* 15566 */;
import f2 from "f" /* 15580 */;
import _mod15590 from "module_15590" /* 15590 */;
import _mod15591 from "module_15591" /* 15591 */;

function ownKeys(arg0) {
  const obj = f2;
  const fResult = obj.f(_mod15590(arg0));
  const f = _mod15591.f;
  let tmp2 = fResult;
  if (f) {
    tmp2 = closure_2(fResult, f(arg0));
  }
  return tmp2;
}
let closure_2 = _mod15545([].concat);
_mod15566("Reflect", "ownKeys") || ownKeys;

export default _mod15566("Reflect", "ownKeys") || ownKeys;
