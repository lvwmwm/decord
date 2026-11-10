// Module ID: 16129
// Function ID: 16130
// Dependencies: [16130, 16127, 16132]

// Module 16129
import _mod16127 from "module_16127" /* 16127 */;
import _mod16130 from "module_16130" /* 16130 */;
import _mod16132 from "module_16132" /* 16132 */;

let fn = Object;
let closure_3 = _mod16130("".split);
if (_mod16127(() => {
  const obj = Object("z");
  return !obj.propertyIsEnumerable(0);
})) {
  fn = (arg0) => {
    let tmp2;
    if ("String" === _mod16132(arg0)) {
      tmp2 = closure_3(arg0, "");
    } else {
      tmp2 = Object(arg0);
    }
    return tmp2;
  };
}

export default fn;
