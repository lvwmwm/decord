// Module ID: 4770
// Function ID: 4771
// Name: ToObject
// Dependencies: [4771, 546]

// Module 4770 (ToObject)
import _mod546 from "module_546" /* 546 */;
import RequireObjectCoercible from "RequireObjectCoercible" /* 4771 */;


export default function ToObject(arg0) {
  RequireObjectCoercible(arg0);
  return _mod546(arg0);
};
