// Module ID: 16477
// Function ID: 16478
// Dependencies: [16478, 16475, 16480]

// Module 16477
import _mod16475 from "module_16475" /* 16475 */;
import _mod16478 from "module_16478" /* 16478 */;
import _mod16480 from "module_16480" /* 16480 */;

let fn = Object;
let closure_3 = _mod16478("".split);
if (_mod16475(() => {
  const obj = Object("z");
  return !obj.propertyIsEnumerable(0);
})) {
  fn = (arg0) => {
    let tmp2;
    if ("String" === _mod16480(arg0)) {
      tmp2 = closure_3(arg0, "");
    } else {
      tmp2 = Object(arg0);
    }
    return tmp2;
  };
}

export default fn;
