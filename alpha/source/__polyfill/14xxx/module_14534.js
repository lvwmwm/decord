// Module ID: 14534
// Function ID: 14535
// Dependencies: [14535, 14532, 14537]

// Module 14534
import _mod14532 from "module_14532" /* 14532 */;
import _mod14535 from "module_14535" /* 14535 */;
import _mod14537 from "module_14537" /* 14537 */;

let fn = Object;
let closure_3 = _mod14535("".split);
if (_mod14532(() => {
  const obj = Object("z");
  return !obj.propertyIsEnumerable(0);
})) {
  fn = (arg0) => {
    let tmp2;
    if ("String" === _mod14537(arg0)) {
      tmp2 = closure_3(arg0, "");
    } else {
      tmp2 = Object(arg0);
    }
    return tmp2;
  };
}

export default fn;
