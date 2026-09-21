// Module ID: 5014
// Function ID: 5015
// Name: ToObject
// Dependencies: [5015, 1294]

// Module 5014 (ToObject)
import _mod1294 from "module_1294" /* 1294 */;
import RequireObjectCoercible from "RequireObjectCoercible" /* 5015 */;


export default function ToObject(arg0) {
  RequireObjectCoercible(arg0);
  return _mod1294(arg0);
};
