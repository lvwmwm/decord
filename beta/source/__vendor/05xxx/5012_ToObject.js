// Module ID: 5012
// Function ID: 5013
// Name: ToObject
// Dependencies: [5013, 1290]

// Module 5012 (ToObject)
import _mod1290 from "module_1290" /* 1290 */;
import RequireObjectCoercible from "RequireObjectCoercible" /* 5013 */;


export default function ToObject(arg0) {
  RequireObjectCoercible(arg0);
  return _mod1290(arg0);
};
