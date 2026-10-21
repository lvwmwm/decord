// Module ID: 6377
// Function ID: 6378
// Name: ToObject
// Dependencies: [6378, 1316]

// Module 6377 (ToObject)
import _mod1316 from "module_1316" /* 1316 */;
import RequireObjectCoercible from "RequireObjectCoercible" /* 6378 */;


export default function ToObject(arg0) {
  RequireObjectCoercible(arg0);
  return _mod1316(arg0);
};
