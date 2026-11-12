// Module ID: 16511
// Function ID: 16512
// Dependencies: [16477, 16498, 16512, 16522, 16523]

// Module 16511
import _mod16477 from "module_16477" /* 16477 */;
import _mod16498 from "module_16498" /* 16498 */;
import f2 from "f" /* 16512 */;
import _mod16522 from "module_16522" /* 16522 */;
import _mod16523 from "module_16523" /* 16523 */;

function ownKeys(arg0) {
  const obj = f2;
  const fResult = obj.f(_mod16522(arg0));
  const f = _mod16523.f;
  let tmp2 = fResult;
  if (f) {
    tmp2 = closure_2(fResult, f(arg0));
  }
  return tmp2;
}
let closure_2 = _mod16477([].concat);
_mod16498("Reflect", "ownKeys") || ownKeys;

export default _mod16498("Reflect", "ownKeys") || ownKeys;
