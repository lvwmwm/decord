// Module ID: 13831
// Function ID: 13832
// Dependencies: [13797, 13818, 13832, 13842, 13843]

// Module 13831
import _mod13797 from "module_13797" /* 13797 */;
import _mod13818 from "module_13818" /* 13818 */;
import f2 from "f" /* 13832 */;
import _mod13842 from "module_13842" /* 13842 */;
import _mod13843 from "module_13843" /* 13843 */;

function ownKeys(arg0) {
  const obj = f2;
  const fResult = obj.f(_mod13842(arg0));
  const f = _mod13843.f;
  let tmp2 = fResult;
  if (f) {
    tmp2 = closure_2(fResult, f(arg0));
  }
  return tmp2;
}
let closure_2 = _mod13797([].concat);
_mod13818("Reflect", "ownKeys") || ownKeys;

export default _mod13818("Reflect", "ownKeys") || ownKeys;
