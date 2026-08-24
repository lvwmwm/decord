// Module ID: 13772
// Function ID: 13773
// Dependencies: [13738, 13759, 13773, 13783, 13784]

// Module 13772
import call from "call" /* 13738 */;
import all from "all" /* 13759 */;
import f2 from "f" /* 13773 */;
import all2 from "all" /* 13783 */;
import _mod13784 from "module_13784" /* 13784 */;

let closure_2 = call([].concat);

export default all("Reflect", "ownKeys") || (function ownKeys(arg0) {
  const fResult = f2.f(all2(arg0));
  const f = _mod13784.f;
  let tmp2 = fResult;
  if (f) {
    tmp2 = callback(fResult, f(arg0));
  }
  return tmp2;
});
