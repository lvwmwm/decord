// Module ID: 6433
// Function ID: 6434
// Name: ToObject
// Dependencies: [6434, 1313]

// Module 6433 (ToObject)
import _mod1313 from "module_1313" /* 1313 */;
import RequireObjectCoercible from "RequireObjectCoercible" /* 6434 */;


export default function ToObject(arg0) {
  RequireObjectCoercible(arg0);
  return _mod1313(arg0);
};
