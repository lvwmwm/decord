// Module ID: 5877
// Function ID: 5878
// Name: ToObject
// Dependencies: [5878, 1316]

// Module 5877 (ToObject)
import _mod1316 from "module_1316" /* 1316 */;
import RequireObjectCoercible from "RequireObjectCoercible" /* 5878 */;


export default function ToObject(arg0) {
  RequireObjectCoercible(arg0);
  return _mod1316(arg0);
};
