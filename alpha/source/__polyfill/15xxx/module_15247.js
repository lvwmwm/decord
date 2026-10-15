// Module ID: 15247
// Function ID: 15248
// Dependencies: [15213, 15234, 15248, 15258, 15259]

// Module 15247
import _mod15213 from "module_15213" /* 15213 */;
import _mod15234 from "module_15234" /* 15234 */;
import f2 from "f" /* 15248 */;
import _mod15258 from "module_15258" /* 15258 */;
import _mod15259 from "module_15259" /* 15259 */;

function ownKeys(arg0) {
  const obj = f2;
  const fResult = obj.f(_mod15258(arg0));
  const f = _mod15259.f;
  let tmp2 = fResult;
  if (f) {
    tmp2 = closure_2(fResult, f(arg0));
  }
  return tmp2;
}
let closure_2 = _mod15213([].concat);
_mod15234("Reflect", "ownKeys") || ownKeys;

export default _mod15234("Reflect", "ownKeys") || ownKeys;
