// Module ID: 15257
// Function ID: 15258
// Dependencies: [15258, 15255, 15260]

// Module 15257
import _mod15255 from "module_15255" /* 15255 */;
import _mod15258 from "module_15258" /* 15258 */;
import _mod15260 from "module_15260" /* 15260 */;

let fn = Object;
let closure_3 = _mod15258("".split);
if (_mod15255(() => {
  const obj = Object("z");
  return !obj.propertyIsEnumerable(0);
})) {
  fn = (arg0) => {
    let tmp2;
    if ("String" === _mod15260(arg0)) {
      tmp2 = closure_3(arg0, "");
    } else {
      tmp2 = Object(arg0);
    }
    return tmp2;
  };
}

export default fn;
