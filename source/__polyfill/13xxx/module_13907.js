// Module ID: 13907
// Function ID: 13908
// Dependencies: [13873, 13894, 13908, 13918, 13919]

// Module 13907
import call from "call" /* 13873 */;
import all from "all" /* 13894 */;
import f2 from "f" /* 13908 */;
import all2 from "all" /* 13918 */;
import _mod13919 from "module_13919" /* 13919 */;

let closure_2 = call([].concat);

export default all("Reflect", "ownKeys") || (function ownKeys(arg0) {
  const fResult = f2.f(all2(arg0));
  const f = _mod13919.f;
  let tmp2 = fResult;
  if (f) {
    tmp2 = callback(fResult, f(arg0));
  }
  return tmp2;
});
