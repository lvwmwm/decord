// Module ID: 4658
// Function ID: 4659
// Name: ToObject
// Dependencies: [4659, 549]

// Module 4658 (ToObject)
import _mod549 from "module_549" /* 549 */;
import RequireObjectCoercible from "RequireObjectCoercible" /* 4659 */;


export default function ToObject(arg0) {
  RequireObjectCoercible(arg0);
  return _mod549(arg0);
};
