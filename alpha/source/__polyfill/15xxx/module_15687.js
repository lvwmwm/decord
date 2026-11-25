// Module ID: 15687
// Function ID: 15688
// Dependencies: [15688, 15685, 15690]

// Module 15687
import _mod15685 from "module_15685" /* 15685 */;
import _mod15688 from "module_15688" /* 15688 */;
import _mod15690 from "module_15690" /* 15690 */;

let fn = Object;
let closure_3 = _mod15688("".split);
if (_mod15685(() => {
  const obj = Object("z");
  return !obj.propertyIsEnumerable(0);
})) {
  fn = (arg0) => {
    let tmp2;
    if ("String" === _mod15690(arg0)) {
      tmp2 = closure_3(arg0, "");
    } else {
      tmp2 = Object(arg0);
    }
    return tmp2;
  };
}

export default fn;
