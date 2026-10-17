// Module ID: 5915
// Function ID: 5916
// Name: ToObject
// Dependencies: [5916, 1316]

// Module 5915 (ToObject)
import _mod1316 from "module_1316" /* 1316 */;
import RequireObjectCoercible from "RequireObjectCoercible" /* 5916 */;


export default function ToObject(arg0) {
  RequireObjectCoercible(arg0);
  return _mod1316(arg0);
};
