// Module ID: 5337
// Function ID: 5338
// Name: ToObject
// Dependencies: [5338, 1301]

// Module 5337 (ToObject)
import _mod1301 from "module_1301" /* 1301 */;
import RequireObjectCoercible from "RequireObjectCoercible" /* 5338 */;


export default function ToObject(arg0) {
  RequireObjectCoercible(arg0);
  return _mod1301(arg0);
};
