// Module ID: 15330
// Function ID: 15331
// Dependencies: [15331, 15328, 15333]

// Module 15330
import _mod15328 from "module_15328" /* 15328 */;
import _mod15331 from "module_15331" /* 15331 */;
import _mod15333 from "module_15333" /* 15333 */;

let fn = Object;
let closure_3 = _mod15331("".split);
if (_mod15328(() => {
  const obj = Object("z");
  return !obj.propertyIsEnumerable(0);
})) {
  fn = (arg0) => {
    let tmp2;
    if ("String" === _mod15333(arg0)) {
      tmp2 = closure_3(arg0, "");
    } else {
      tmp2 = Object(arg0);
    }
    return tmp2;
  };
}

export default fn;
