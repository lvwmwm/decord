// Module ID: 16424
// Function ID: 16425
// Dependencies: [16390, 16411, 16425, 16435, 16436]

// Module 16424
import _mod16390 from "module_16390" /* 16390 */;
import _mod16411 from "module_16411" /* 16411 */;
import f2 from "f" /* 16425 */;
import _mod16435 from "module_16435" /* 16435 */;
import _mod16436 from "module_16436" /* 16436 */;

function ownKeys(arg0) {
  const obj = f2;
  const fResult = obj.f(_mod16435(arg0));
  const f = _mod16436.f;
  let tmp2 = fResult;
  if (f) {
    tmp2 = closure_2(fResult, f(arg0));
  }
  return tmp2;
}
let closure_2 = _mod16390([].concat);
_mod16411("Reflect", "ownKeys") || ownKeys;

export default _mod16411("Reflect", "ownKeys") || ownKeys;
