// Module ID: 15526
// Function ID: 15527
// Dependencies: [15527, 15524, 15529]

// Module 15526
import _mod15524 from "module_15524" /* 15524 */;
import _mod15527 from "module_15527" /* 15527 */;
import _mod15529 from "module_15529" /* 15529 */;

let fn = Object;
let closure_3 = _mod15527("".split);
if (_mod15524(() => {
  const obj = Object("z");
  return !obj.propertyIsEnumerable(0);
})) {
  fn = (arg0) => {
    let tmp2;
    if ("String" === _mod15529(arg0)) {
      tmp2 = closure_3(arg0, "");
    } else {
      tmp2 = Object(arg0);
    }
    return tmp2;
  };
}

export default fn;
