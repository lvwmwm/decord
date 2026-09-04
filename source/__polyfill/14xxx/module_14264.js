// Module ID: 14264
// Function ID: 14265
// Dependencies: [14230, 14251, 14265, 14275, 14276]

// Module 14264
import call from "call" /* 14230 */;
import all from "all" /* 14251 */;
import f2 from "f" /* 14265 */;
import all2 from "all" /* 14275 */;
import _mod14276 from "module_14276" /* 14276 */;

let closure_2 = call([].concat);

export default all("Reflect", "ownKeys") || (function ownKeys(arg0) {
  const fResult = f2.f(all2(arg0));
  const f = _mod14276.f;
  let tmp2 = fResult;
  if (f) {
    tmp2 = callback(fResult, f(arg0));
  }
  return tmp2;
});
