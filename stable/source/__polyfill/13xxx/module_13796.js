// Module ID: 13796
// Function ID: 13797
// Dependencies: [13797, 13794, 13799]

// Module 13796
import _mod13794 from "module_13794" /* 13794 */;
import _mod13797 from "module_13797" /* 13797 */;
import _mod13799 from "module_13799" /* 13799 */;

let fn = Object;
let closure_3 = _mod13797("".split);
if (_mod13794(() => {
  const obj = Object("z");
  return !obj.propertyIsEnumerable(0);
})) {
  fn = (arg0) => {
    let tmp2;
    if ("String" === _mod13799(arg0)) {
      tmp2 = closure_3(arg0, "");
    } else {
      tmp2 = Object(arg0);
    }
    return tmp2;
  };
}

export default fn;
