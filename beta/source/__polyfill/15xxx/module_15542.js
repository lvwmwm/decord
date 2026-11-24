// Module ID: 15542
// Function ID: 15543
// Dependencies: [15543, 15540, 15545]

// Module 15542
import _mod15540 from "module_15540" /* 15540 */;
import _mod15543 from "module_15543" /* 15543 */;
import _mod15545 from "module_15545" /* 15545 */;

let fn = Object;
let closure_3 = _mod15543("".split);
if (_mod15540(() => {
  const obj = Object("z");
  return !obj.propertyIsEnumerable(0);
})) {
  fn = (arg0) => {
    let tmp2;
    if ("String" === _mod15545(arg0)) {
      tmp2 = closure_3(arg0, "");
    } else {
      tmp2 = Object(arg0);
    }
    return tmp2;
  };
}

export default fn;
