// Module ID: 15247
// Function ID: 15248
// Dependencies: [15248, 15245, 15250]

// Module 15247
import _mod15245 from "module_15245" /* 15245 */;
import _mod15248 from "module_15248" /* 15248 */;
import _mod15250 from "module_15250" /* 15250 */;

let fn = Object;
let closure_3 = _mod15248("".split);
if (_mod15245(() => {
  const obj = Object("z");
  return !obj.propertyIsEnumerable(0);
})) {
  fn = (arg0) => {
    let tmp2;
    if ("String" === _mod15250(arg0)) {
      tmp2 = closure_3(arg0, "");
    } else {
      tmp2 = Object(arg0);
    }
    return tmp2;
  };
}

export default fn;
