// Module ID: 5099
// Function ID: 5100
// Name: ToObject
// Dependencies: [5100, 1290]

// Module 5099 (ToObject)
import _mod1290 from "module_1290" /* 1290 */;
import RequireObjectCoercible from "RequireObjectCoercible" /* 5100 */;


export default function ToObject(arg0) {
  RequireObjectCoercible(arg0);
  return _mod1290(arg0);
};
