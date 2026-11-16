// Module ID: 16753
// Function ID: 16754
// Dependencies: [16754, 16751, 16756]

// Module 16753
import _mod16751 from "module_16751" /* 16751 */;
import _mod16754 from "module_16754" /* 16754 */;
import _mod16756 from "module_16756" /* 16756 */;

let fn = Object;
let closure_3 = _mod16754("".split);
if (_mod16751(() => {
  const obj = Object("z");
  return !obj.propertyIsEnumerable(0);
})) {
  fn = (arg0) => {
    let tmp2;
    if ("String" === _mod16756(arg0)) {
      tmp2 = closure_3(arg0, "");
    } else {
      tmp2 = Object(arg0);
    }
    return tmp2;
  };
}

export default fn;
