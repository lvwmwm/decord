// Module ID: 16366
// Function ID: 16367
// Dependencies: [16367, 16364, 16369]

// Module 16366
import _mod16364 from "module_16364" /* 16364 */;
import _mod16367 from "module_16367" /* 16367 */;
import _mod16369 from "module_16369" /* 16369 */;

let fn = Object;
let closure_3 = _mod16367("".split);
if (_mod16364(() => {
  const obj = Object("z");
  return !obj.propertyIsEnumerable(0);
})) {
  fn = (arg0) => {
    let tmp2;
    if ("String" === _mod16369(arg0)) {
      tmp2 = closure_3(arg0, "");
    } else {
      tmp2 = Object(arg0);
    }
    return tmp2;
  };
}

export default fn;
