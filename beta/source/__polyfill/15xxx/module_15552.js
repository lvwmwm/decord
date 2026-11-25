// Module ID: 15552
// Function ID: 15553
// Dependencies: [15553, 15550, 15555]

// Module 15552
import _mod15550 from "module_15550" /* 15550 */;
import _mod15553 from "module_15553" /* 15553 */;
import _mod15555 from "module_15555" /* 15555 */;

let fn = Object;
let closure_3 = _mod15553("".split);
if (_mod15550(() => {
  const obj = Object("z");
  return !obj.propertyIsEnumerable(0);
})) {
  fn = (arg0) => {
    let tmp2;
    if ("String" === _mod15555(arg0)) {
      tmp2 = closure_3(arg0, "");
    } else {
      tmp2 = Object(arg0);
    }
    return tmp2;
  };
}

export default fn;
