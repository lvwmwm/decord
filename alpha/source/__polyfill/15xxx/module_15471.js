// Module ID: 15471
// Function ID: 15472
// Dependencies: [15472, 15469, 15474]

// Module 15471
import _mod15469 from "module_15469" /* 15469 */;
import _mod15472 from "module_15472" /* 15472 */;
import _mod15474 from "module_15474" /* 15474 */;

let fn = Object;
let closure_3 = _mod15472("".split);
if (_mod15469(() => {
  const obj = Object("z");
  return !obj.propertyIsEnumerable(0);
})) {
  fn = (arg0) => {
    let tmp2;
    if ("String" === _mod15474(arg0)) {
      tmp2 = closure_3(arg0, "");
    } else {
      tmp2 = Object(arg0);
    }
    return tmp2;
  };
}

export default fn;
