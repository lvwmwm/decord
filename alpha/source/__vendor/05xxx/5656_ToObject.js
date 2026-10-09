// Module ID: 5656
// Function ID: 5657
// Name: ToObject
// Dependencies: [5657, 1314]

// Module 5656 (ToObject)
import _mod1314 from "module_1314" /* 1314 */;
import RequireObjectCoercible from "RequireObjectCoercible" /* 5657 */;


export default function ToObject(arg0) {
  RequireObjectCoercible(arg0);
  return _mod1314(arg0);
};
