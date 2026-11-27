// Module ID: 15745
// Function ID: 15746
// Dependencies: [15746, 15743, 15748]

// Module 15745
import _mod15743 from "module_15743" /* 15743 */;
import _mod15746 from "module_15746" /* 15746 */;
import _mod15748 from "module_15748" /* 15748 */;

let fn = Object;
let closure_3 = _mod15746("".split);
if (_mod15743(() => {
  const obj = Object("z");
  return !obj.propertyIsEnumerable(0);
})) {
  fn = (arg0) => {
    let tmp2;
    if ("String" === _mod15748(arg0)) {
      tmp2 = closure_3(arg0, "");
    } else {
      tmp2 = Object(arg0);
    }
    return tmp2;
  };
}

export default fn;
