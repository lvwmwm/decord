// Module ID: 6430
// Function ID: 6431
// Name: ToObject
// Dependencies: [6431, 1316]

// Module 6430 (ToObject)
import _mod1316 from "module_1316" /* 1316 */;
import RequireObjectCoercible from "RequireObjectCoercible" /* 6431 */;


export default function ToObject(arg0) {
  RequireObjectCoercible(arg0);
  return _mod1316(arg0);
};
