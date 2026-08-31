// Module ID: 4738
// Function ID: 4739
// Name: ToObject
// Dependencies: [4739, 549]

// Module 4738 (ToObject)
import _mod549 from "module_549" /* 549 */;
import RequireObjectCoercible from "RequireObjectCoercible" /* 4739 */;


export default function ToObject(arg0) {
  RequireObjectCoercible(arg0);
  return _mod549(arg0);
};
