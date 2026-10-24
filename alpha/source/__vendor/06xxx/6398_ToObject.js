// Module ID: 6398
// Function ID: 6399
// Name: ToObject
// Dependencies: [6399, 1316]

// Module 6398 (ToObject)
import _mod1316 from "module_1316" /* 1316 */;
import RequireObjectCoercible from "RequireObjectCoercible" /* 6399 */;


export default function ToObject(arg0) {
  RequireObjectCoercible(arg0);
  return _mod1316(arg0);
};
