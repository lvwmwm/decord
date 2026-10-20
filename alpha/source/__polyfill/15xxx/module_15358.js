// Module ID: 15358
// Function ID: 15359
// Dependencies: [15359, 15356, 15361]

// Module 15358
import _mod15356 from "module_15356" /* 15356 */;
import _mod15359 from "module_15359" /* 15359 */;
import _mod15361 from "module_15361" /* 15361 */;

let fn = Object;
let closure_3 = _mod15359("".split);
if (_mod15356(() => {
  const obj = Object("z");
  return !obj.propertyIsEnumerable(0);
})) {
  fn = (arg0) => {
    let tmp2;
    if ("String" === _mod15361(arg0)) {
      tmp2 = closure_3(arg0, "");
    } else {
      tmp2 = Object(arg0);
    }
    return tmp2;
  };
}

export default fn;
