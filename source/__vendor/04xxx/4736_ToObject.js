// Module ID: 4736
// Function ID: 4737
// Name: ToObject
// Dependencies: [4737, 549]

// Module 4736 (ToObject)
import _mod549 from "module_549" /* 549 */;
import RequireObjectCoercible from "RequireObjectCoercible" /* 4737 */;


export default function ToObject(arg0) {
  RequireObjectCoercible(arg0);
  return _mod549(arg0);
};
