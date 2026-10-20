// Module ID: 6355
// Function ID: 6356
// Name: ToObject
// Dependencies: [6356, 1316]

// Module 6355 (ToObject)
import _mod1316 from "module_1316" /* 1316 */;
import RequireObjectCoercible from "RequireObjectCoercible" /* 6356 */;


export default function ToObject(arg0) {
  RequireObjectCoercible(arg0);
  return _mod1316(arg0);
};
