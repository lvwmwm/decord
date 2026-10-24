// Module ID: 15546
// Function ID: 15547
// Dependencies: [15547, 15544, 15549]

// Module 15546
import _mod15544 from "module_15544" /* 15544 */;
import _mod15547 from "module_15547" /* 15547 */;
import _mod15549 from "module_15549" /* 15549 */;

let fn = Object;
let closure_3 = _mod15547("".split);
if (_mod15544(() => {
  const obj = Object("z");
  return !obj.propertyIsEnumerable(0);
})) {
  fn = (arg0) => {
    let tmp2;
    if ("String" === _mod15549(arg0)) {
      tmp2 = closure_3(arg0, "");
    } else {
      tmp2 = Object(arg0);
    }
    return tmp2;
  };
}

export default fn;
