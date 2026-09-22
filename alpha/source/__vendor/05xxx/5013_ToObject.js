// Module ID: 5013
// Function ID: 5014
// Name: ToObject
// Dependencies: [5014, 1290]

// Module 5013 (ToObject)
import _mod1290 from "module_1290" /* 1290 */;
import RequireObjectCoercible from "RequireObjectCoercible" /* 5014 */;


export default function ToObject(arg0) {
  RequireObjectCoercible(arg0);
  return _mod1290(arg0);
};
