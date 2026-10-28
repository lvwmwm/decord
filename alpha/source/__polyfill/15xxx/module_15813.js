// Module ID: 15813
// Function ID: 15814
// Dependencies: [15814, 15811, 15816]

// Module 15813
import _mod15811 from "module_15811" /* 15811 */;
import _mod15814 from "module_15814" /* 15814 */;
import _mod15816 from "module_15816" /* 15816 */;

let fn = Object;
let closure_3 = _mod15814("".split);
if (_mod15811(() => {
  const obj = Object("z");
  return !obj.propertyIsEnumerable(0);
})) {
  fn = (arg0) => {
    let tmp2;
    if ("String" === _mod15816(arg0)) {
      tmp2 = closure_3(arg0, "");
    } else {
      tmp2 = Object(arg0);
    }
    return tmp2;
  };
}

export default fn;
