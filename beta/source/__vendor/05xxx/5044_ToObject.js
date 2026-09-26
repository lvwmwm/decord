// Module ID: 5044
// Function ID: 5045
// Name: ToObject
// Dependencies: [5045, 1290]

// Module 5044 (ToObject)
import _mod1290 from "module_1290" /* 1290 */;
import RequireObjectCoercible from "RequireObjectCoercible" /* 5045 */;


export default function ToObject(arg0) {
  RequireObjectCoercible(arg0);
  return _mod1290(arg0);
};
