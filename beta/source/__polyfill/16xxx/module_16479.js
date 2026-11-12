// Module ID: 16479
// Function ID: 16480
// Dependencies: [16480, 16477, 16482]

// Module 16479
import _mod16477 from "module_16477" /* 16477 */;
import _mod16480 from "module_16480" /* 16480 */;
import _mod16482 from "module_16482" /* 16482 */;

let fn = Object;
let closure_3 = _mod16480("".split);
if (_mod16477(() => {
  const obj = Object("z");
  return !obj.propertyIsEnumerable(0);
})) {
  fn = (arg0) => {
    let tmp2;
    if ("String" === _mod16482(arg0)) {
      tmp2 = closure_3(arg0, "");
    } else {
      tmp2 = Object(arg0);
    }
    return tmp2;
  };
}

export default fn;
