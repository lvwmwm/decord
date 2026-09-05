// Module ID: 4817
// Function ID: 4818
// Name: ToObject
// Dependencies: [4818, 1291]

// Module 4817 (ToObject)
import _mod1291 from "module_1291" /* 1291 */;
import RequireObjectCoercible from "RequireObjectCoercible" /* 4818 */;


export default function ToObject(arg0) {
  RequireObjectCoercible(arg0);
  return _mod1291(arg0);
};
