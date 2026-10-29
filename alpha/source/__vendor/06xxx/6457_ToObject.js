// Module ID: 6457
// Function ID: 6458
// Name: ToObject
// Dependencies: [6458, 1313]

// Module 6457 (ToObject)
import _mod1313 from "module_1313" /* 1313 */;
import RequireObjectCoercible from "RequireObjectCoercible" /* 6458 */;


export default function ToObject(arg0) {
  RequireObjectCoercible(arg0);
  return _mod1313(arg0);
};
