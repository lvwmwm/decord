// Module ID: 6384
// Function ID: 6385
// Name: ToObject
// Dependencies: [6385, 1316]

// Module 6384 (ToObject)
import _mod1316 from "module_1316" /* 1316 */;
import RequireObjectCoercible from "RequireObjectCoercible" /* 6385 */;


export default function ToObject(arg0) {
  RequireObjectCoercible(arg0);
  return _mod1316(arg0);
};
