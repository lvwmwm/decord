// Module ID: 16134
// Function ID: 16135
// Dependencies: [16135, 16132, 16137]

// Module 16134
import _mod16132 from "module_16132" /* 16132 */;
import _mod16135 from "module_16135" /* 16135 */;
import _mod16137 from "module_16137" /* 16137 */;

let fn = Object;
let closure_3 = _mod16135("".split);
if (_mod16132(() => {
  const obj = Object("z");
  return !obj.propertyIsEnumerable(0);
})) {
  fn = (arg0) => {
    let tmp2;
    if ("String" === _mod16137(arg0)) {
      tmp2 = closure_3(arg0, "");
    } else {
      tmp2 = Object(arg0);
    }
    return tmp2;
  };
}

export default fn;
