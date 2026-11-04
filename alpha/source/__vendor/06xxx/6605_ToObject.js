// Module ID: 6605
// Function ID: 6606
// Name: ToObject
// Dependencies: [6606, 1301]

// Module 6605 (ToObject)
import _mod1301 from "module_1301" /* 1301 */;
import RequireObjectCoercible from "RequireObjectCoercible" /* 6606 */;


export default function ToObject(arg0) {
  RequireObjectCoercible(arg0);
  return _mod1301(arg0);
};
