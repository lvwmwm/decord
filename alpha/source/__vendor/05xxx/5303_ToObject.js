// Module ID: 5303
// Function ID: 5304
// Name: ToObject
// Dependencies: [5304, 1290]

// Module 5303 (ToObject)
import _mod1290 from "module_1290" /* 1290 */;
import RequireObjectCoercible from "RequireObjectCoercible" /* 5304 */;


export default function ToObject(arg0) {
  RequireObjectCoercible(arg0);
  return _mod1290(arg0);
};
