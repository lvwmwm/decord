// Module ID: 5108
// Function ID: 5109
// Name: ToObject
// Dependencies: [5109, 1302]

// Module 5108 (ToObject)
import _mod1302 from "module_1302" /* 1302 */;
import RequireObjectCoercible from "RequireObjectCoercible" /* 5109 */;


export default function ToObject(arg0) {
  RequireObjectCoercible(arg0);
  return _mod1302(arg0);
};
