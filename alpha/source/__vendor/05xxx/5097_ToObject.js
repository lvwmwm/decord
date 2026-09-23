// Module ID: 5097
// Function ID: 5098
// Name: ToObject
// Dependencies: [5098, 1290]

// Module 5097 (ToObject)
import _mod1290 from "module_1290" /* 1290 */;
import RequireObjectCoercible from "RequireObjectCoercible" /* 5098 */;


export default function ToObject(arg0) {
  RequireObjectCoercible(arg0);
  return _mod1290(arg0);
};
