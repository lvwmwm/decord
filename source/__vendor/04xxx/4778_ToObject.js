// Module ID: 4778
// Function ID: 4779
// Name: ToObject
// Dependencies: [4779, 546]

// Module 4778 (ToObject)
import _mod546 from "module_546" /* 546 */;
import RequireObjectCoercible from "RequireObjectCoercible" /* 4779 */;


export default function ToObject(arg0) {
  RequireObjectCoercible(arg0);
  return _mod546(arg0);
};
