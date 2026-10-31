// Module ID: 16165
// Function ID: 16166
// Dependencies: [16131, 16152, 16166, 16176, 16177]

// Module 16165
import _mod16131 from "module_16131" /* 16131 */;
import _mod16152 from "module_16152" /* 16152 */;
import f2 from "f" /* 16166 */;
import _mod16176 from "module_16176" /* 16176 */;
import _mod16177 from "module_16177" /* 16177 */;

function ownKeys(arg0) {
  const obj = f2;
  const fResult = obj.f(_mod16176(arg0));
  const f = _mod16177.f;
  let tmp2 = fResult;
  if (f) {
    tmp2 = closure_2(fResult, f(arg0));
  }
  return tmp2;
}
let closure_2 = _mod16131([].concat);
_mod16152("Reflect", "ownKeys") || ownKeys;

export default _mod16152("Reflect", "ownKeys") || ownKeys;
