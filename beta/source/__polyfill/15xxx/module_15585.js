// Module ID: 15585
// Function ID: 15586
// Dependencies: [15586, 15583, 15588]

// Module 15585
import _mod15583 from "module_15583" /* 15583 */;
import _mod15586 from "module_15586" /* 15586 */;
import _mod15588 from "module_15588" /* 15588 */;

let fn = Object;
let closure_3 = _mod15586("".split);
if (_mod15583(() => {
  const obj = Object("z");
  return !obj.propertyIsEnumerable(0);
})) {
  fn = (arg0) => {
    let tmp2;
    if ("String" === _mod15588(arg0)) {
      tmp2 = closure_3(arg0, "");
    } else {
      tmp2 = Object(arg0);
    }
    return tmp2;
  };
}

export default fn;
