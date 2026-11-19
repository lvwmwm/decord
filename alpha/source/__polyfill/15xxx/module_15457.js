// Module ID: 15457
// Function ID: 15458
// Dependencies: [15458, 15455, 15460]

// Module 15457
import _mod15455 from "module_15455" /* 15455 */;
import _mod15458 from "module_15458" /* 15458 */;
import _mod15460 from "module_15460" /* 15460 */;

let fn = Object;
let closure_3 = _mod15458("".split);
if (_mod15455(() => {
  const obj = Object("z");
  return !obj.propertyIsEnumerable(0);
})) {
  fn = (arg0) => {
    let tmp2;
    if ("String" === _mod15460(arg0)) {
      tmp2 = closure_3(arg0, "");
    } else {
      tmp2 = Object(arg0);
    }
    return tmp2;
  };
}

export default fn;
