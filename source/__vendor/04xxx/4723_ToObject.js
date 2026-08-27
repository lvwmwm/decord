// Module ID: 4723
// Function ID: 4724
// Name: ToObject
// Dependencies: [4724, 549]

// Module 4723 (ToObject)
import _mod549 from "module_549" /* 549 */;
import RequireObjectCoercible from "RequireObjectCoercible" /* 4724 */;


export default function ToObject(arg0) {
  RequireObjectCoercible(arg0);
  return _mod549(arg0);
};
