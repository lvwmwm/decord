// Module ID: 4722
// Function ID: 4723
// Name: ToObject
// Dependencies: [4723, 549]

// Module 4722 (ToObject)
import _mod549 from "module_549" /* 549 */;
import RequireObjectCoercible from "RequireObjectCoercible" /* 4723 */;


export default function ToObject(arg0) {
  RequireObjectCoercible(arg0);
  return _mod549(arg0);
};
