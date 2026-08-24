// Module ID: 4403
// Function ID: 4404
// Name: ToObject
// Dependencies: [4404, 549]

// Module 4403 (ToObject)
import _mod549 from "module_549" /* 549 */;
import RequireObjectCoercible from "RequireObjectCoercible" /* 4404 */;


export default function ToObject(arg0) {
  RequireObjectCoercible(arg0);
  return _mod549(arg0);
};
