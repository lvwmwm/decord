// Module ID: 15448
// Function ID: 15449
// Dependencies: [15449, 15446, 15451]

// Module 15448
import _mod15446 from "module_15446" /* 15446 */;
import _mod15449 from "module_15449" /* 15449 */;
import _mod15451 from "module_15451" /* 15451 */;

let fn = Object;
let closure_3 = _mod15449("".split);
if (_mod15446(() => {
  const obj = Object("z");
  return !obj.propertyIsEnumerable(0);
})) {
  fn = (arg0) => {
    let tmp2;
    if ("String" === _mod15451(arg0)) {
      tmp2 = closure_3(arg0, "");
    } else {
      tmp2 = Object(arg0);
    }
    return tmp2;
  };
}

export default fn;
