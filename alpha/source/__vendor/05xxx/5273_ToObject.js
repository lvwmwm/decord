// Module ID: 5273
// Function ID: 5274
// Name: ToObject
// Dependencies: [5274, 1290]

// Module 5273 (ToObject)
import _mod1290 from "module_1290" /* 1290 */;
import RequireObjectCoercible from "RequireObjectCoercible" /* 5274 */;


export default function ToObject(arg0) {
  RequireObjectCoercible(arg0);
  return _mod1290(arg0);
};
