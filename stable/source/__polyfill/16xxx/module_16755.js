// Module ID: 16755
// Function ID: 16756
// Dependencies: [16756, 16753, 16758]

// Module 16755
import _mod16753 from "module_16753" /* 16753 */;
import _mod16756 from "module_16756" /* 16756 */;
import _mod16758 from "module_16758" /* 16758 */;

let fn = Object;
let closure_3 = _mod16756("".split);
if (_mod16753(() => {
  const obj = Object("z");
  return !obj.propertyIsEnumerable(0);
})) {
  fn = (arg0) => {
    let tmp2;
    if ("String" === _mod16758(arg0)) {
      tmp2 = closure_3(arg0, "");
    } else {
      tmp2 = Object(arg0);
    }
    return tmp2;
  };
}

export default fn;
