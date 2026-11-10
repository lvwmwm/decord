// Module ID: 16474
// Function ID: 16475
// Dependencies: [16475, 16472, 16477]

// Module 16474
import _mod16472 from "module_16472" /* 16472 */;
import _mod16475 from "module_16475" /* 16475 */;
import _mod16477 from "module_16477" /* 16477 */;

let fn = Object;
let closure_3 = _mod16475("".split);
if (_mod16472(() => {
  const obj = Object("z");
  return !obj.propertyIsEnumerable(0);
})) {
  fn = (arg0) => {
    let tmp2;
    if ("String" === _mod16477(arg0)) {
      tmp2 = closure_3(arg0, "");
    } else {
      tmp2 = Object(arg0);
    }
    return tmp2;
  };
}

export default fn;
