// Module ID: 5046
// Function ID: 5047
// Name: ToObject
// Dependencies: [5047, 1294]

// Module 5046 (ToObject)
import _mod1294 from "module_1294" /* 1294 */;
import RequireObjectCoercible from "RequireObjectCoercible" /* 5047 */;


export default function ToObject(arg0) {
  RequireObjectCoercible(arg0);
  return _mod1294(arg0);
};
