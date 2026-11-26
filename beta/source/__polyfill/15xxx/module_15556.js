// Module ID: 15556
// Function ID: 15557
// Dependencies: [15557, 15554, 15559]

// Module 15556
import _mod15554 from "module_15554" /* 15554 */;
import _mod15557 from "module_15557" /* 15557 */;
import _mod15559 from "module_15559" /* 15559 */;

let fn = Object;
let closure_3 = _mod15557("".split);
if (_mod15554(() => {
  const obj = Object("z");
  return !obj.propertyIsEnumerable(0);
})) {
  fn = (arg0) => {
    let tmp2;
    if ("String" === _mod15559(arg0)) {
      tmp2 = closure_3(arg0, "");
    } else {
      tmp2 = Object(arg0);
    }
    return tmp2;
  };
}

export default fn;
