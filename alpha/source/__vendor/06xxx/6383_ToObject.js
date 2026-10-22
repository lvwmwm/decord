// Module ID: 6383
// Function ID: 6384
// Name: ToObject
// Dependencies: [6384, 1316]

// Module 6383 (ToObject)
import _mod1316 from "module_1316" /* 1316 */;
import RequireObjectCoercible from "RequireObjectCoercible" /* 6384 */;


export default function ToObject(arg0) {
  RequireObjectCoercible(arg0);
  return _mod1316(arg0);
};
