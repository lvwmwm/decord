// Module ID: 14951
// Function ID: 14952
// Dependencies: [14917, 14938, 14952, 14962, 14963]

// Module 14951
import _mod14917 from "module_14917" /* 14917 */;
import _mod14938 from "module_14938" /* 14938 */;
import f2 from "f" /* 14952 */;
import _mod14962 from "module_14962" /* 14962 */;
import _mod14963 from "module_14963" /* 14963 */;

function ownKeys(arg0) {
  const obj = f2;
  const fResult = obj.f(_mod14962(arg0));
  const f = _mod14963.f;
  let tmp2 = fResult;
  if (f) {
    tmp2 = closure_2(fResult, f(arg0));
  }
  return tmp2;
}
let closure_2 = _mod14917([].concat);
_mod14938("Reflect", "ownKeys") || ownKeys;

export default _mod14938("Reflect", "ownKeys") || ownKeys;
