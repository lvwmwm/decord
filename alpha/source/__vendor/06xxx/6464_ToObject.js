// Module ID: 6464
// Function ID: 6465
// Name: ToObject
// Dependencies: [6465, 1302]

// Module 6464 (ToObject)
import _mod1302 from "module_1302" /* 1302 */;
import RequireObjectCoercible from "RequireObjectCoercible" /* 6465 */;


export default function ToObject(arg0) {
  RequireObjectCoercible(arg0);
  return _mod1302(arg0);
};
