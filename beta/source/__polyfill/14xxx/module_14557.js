// Module ID: 14557
// Function ID: 14558
// Dependencies: [14558, 14555, 14560]

// Module 14557
import _mod14555 from "module_14555" /* 14555 */;
import _mod14558 from "module_14558" /* 14558 */;
import _mod14560 from "module_14560" /* 14560 */;

let fn = Object;
let closure_3 = _mod14558("".split);
if (_mod14555(() => {
  const obj = Object("z");
  return !obj.propertyIsEnumerable(0);
})) {
  fn = (arg0) => {
    let tmp2;
    if ("String" === _mod14560(arg0)) {
      tmp2 = closure_3(arg0, "");
    } else {
      tmp2 = Object(arg0);
    }
    return tmp2;
  };
}

export default fn;
