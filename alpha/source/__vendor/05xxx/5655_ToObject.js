// Module ID: 5655
// Function ID: 5656
// Name: ToObject
// Dependencies: [5656, 1313]

// Module 5655 (ToObject)
import _mod1313 from "module_1313" /* 1313 */;
import RequireObjectCoercible from "RequireObjectCoercible" /* 5656 */;


export default function ToObject(arg0) {
  RequireObjectCoercible(arg0);
  return _mod1313(arg0);
};
