// Module ID: 6590
// Function ID: 6591
// Name: ToObject
// Dependencies: [6591, 1301]

// Module 6590 (ToObject)
import _mod1301 from "module_1301" /* 1301 */;
import RequireObjectCoercible from "RequireObjectCoercible" /* 6591 */;


export default function ToObject(arg0) {
  RequireObjectCoercible(arg0);
  return _mod1301(arg0);
};
