// Module ID: 16277
// Function ID: 16278
// Dependencies: [16278, 16275, 16280]

// Module 16277
import _mod16275 from "module_16275" /* 16275 */;
import _mod16278 from "module_16278" /* 16278 */;
import _mod16280 from "module_16280" /* 16280 */;

let fn = Object;
let closure_3 = _mod16278("".split);
if (_mod16275(() => {
  const obj = Object("z");
  return !obj.propertyIsEnumerable(0);
})) {
  fn = (arg0) => {
    let tmp2;
    if ("String" === _mod16280(arg0)) {
      tmp2 = closure_3(arg0, "");
    } else {
      tmp2 = Object(arg0);
    }
    return tmp2;
  };
}

export default fn;
