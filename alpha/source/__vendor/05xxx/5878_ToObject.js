// Module ID: 5878
// Function ID: 5879
// Name: ToObject
// Dependencies: [5879, 1316]

// Module 5878 (ToObject)
import _mod1316 from "module_1316" /* 1316 */;
import RequireObjectCoercible from "RequireObjectCoercible" /* 5879 */;


export default function ToObject(arg0) {
  RequireObjectCoercible(arg0);
  return _mod1316(arg0);
};
