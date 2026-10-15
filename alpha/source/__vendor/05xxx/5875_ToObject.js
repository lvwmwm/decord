// Module ID: 5875
// Function ID: 5876
// Name: ToObject
// Dependencies: [5876, 1314]

// Module 5875 (ToObject)
import _mod1314 from "module_1314" /* 1314 */;
import RequireObjectCoercible from "RequireObjectCoercible" /* 5876 */;


export default function ToObject(arg0) {
  RequireObjectCoercible(arg0);
  return _mod1314(arg0);
};
