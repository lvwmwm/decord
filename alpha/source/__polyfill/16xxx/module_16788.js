// Module ID: 16788
// Function ID: 16789
// Dependencies: [16789, 16786, 16791]

// Module 16788
import _mod16786 from "module_16786" /* 16786 */;
import _mod16789 from "module_16789" /* 16789 */;
import _mod16791 from "module_16791" /* 16791 */;

let fn = Object;
let closure_3 = _mod16789("".split);
if (_mod16786(() => {
  const obj = Object("z");
  return !obj.propertyIsEnumerable(0);
})) {
  fn = (arg0) => {
    let tmp2;
    if ("String" === _mod16791(arg0)) {
      tmp2 = closure_3(arg0, "");
    } else {
      tmp2 = Object(arg0);
    }
    return tmp2;
  };
}

export default fn;
