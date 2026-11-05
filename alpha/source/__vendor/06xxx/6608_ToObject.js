// Module ID: 6608
// Function ID: 6609
// Name: ToObject
// Dependencies: [6609, 1301]

// Module 6608 (ToObject)
import _mod1301 from "module_1301" /* 1301 */;
import RequireObjectCoercible from "RequireObjectCoercible" /* 6609 */;


export default function ToObject(arg0) {
  RequireObjectCoercible(arg0);
  return _mod1301(arg0);
};
