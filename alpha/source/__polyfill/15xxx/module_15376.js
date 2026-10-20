// Module ID: 15376
// Function ID: 15377
// Dependencies: [15377, 15374, 15379]

// Module 15376
import _mod15374 from "module_15374" /* 15374 */;
import _mod15377 from "module_15377" /* 15377 */;
import _mod15379 from "module_15379" /* 15379 */;

let fn = Object;
let closure_3 = _mod15377("".split);
if (_mod15374(() => {
  const obj = Object("z");
  return !obj.propertyIsEnumerable(0);
})) {
  fn = (arg0) => {
    let tmp2;
    if ("String" === _mod15379(arg0)) {
      tmp2 = closure_3(arg0, "");
    } else {
      tmp2 = Object(arg0);
    }
    return tmp2;
  };
}

export default fn;
