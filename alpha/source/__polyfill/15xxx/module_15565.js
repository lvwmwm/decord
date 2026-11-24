// Module ID: 15565
// Function ID: 15566
// Dependencies: [15566, 15563, 15568]

// Module 15565
import _mod15563 from "module_15563" /* 15563 */;
import _mod15566 from "module_15566" /* 15566 */;
import _mod15568 from "module_15568" /* 15568 */;

let fn = Object;
let closure_3 = _mod15566("".split);
if (_mod15563(() => {
  const obj = Object("z");
  return !obj.propertyIsEnumerable(0);
})) {
  fn = (arg0) => {
    let tmp2;
    if ("String" === _mod15568(arg0)) {
      tmp2 = closure_3(arg0, "");
    } else {
      tmp2 = Object(arg0);
    }
    return tmp2;
  };
}

export default fn;
