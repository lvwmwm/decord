// Module ID: 15587
// Function ID: 15588
// Dependencies: [15588, 15585, 15590]

// Module 15587
import _mod15585 from "module_15585" /* 15585 */;
import _mod15588 from "module_15588" /* 15588 */;
import _mod15590 from "module_15590" /* 15590 */;

let fn = Object;
let closure_3 = _mod15588("".split);
if (_mod15585(() => {
  const obj = Object("z");
  return !obj.propertyIsEnumerable(0);
})) {
  fn = (arg0) => {
    let tmp2;
    if ("String" === _mod15590(arg0)) {
      tmp2 = closure_3(arg0, "");
    } else {
      tmp2 = Object(arg0);
    }
    return tmp2;
  };
}

export default fn;
