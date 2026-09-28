// Module ID: 5107
// Function ID: 5108
// Name: ToObject
// Dependencies: [5108, 1290]

// Module 5107 (ToObject)
import _mod1290 from "module_1290" /* 1290 */;
import RequireObjectCoercible from "RequireObjectCoercible" /* 5108 */;


export default function ToObject(arg0) {
  RequireObjectCoercible(arg0);
  return _mod1290(arg0);
};
