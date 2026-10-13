// Module ID: 14878
// Function ID: 14879
// Dependencies: [14879, 14876, 14881]

// Module 14878
import _mod14876 from "module_14876" /* 14876 */;
import _mod14879 from "module_14879" /* 14879 */;
import _mod14881 from "module_14881" /* 14881 */;

let fn = Object;
let closure_3 = _mod14879("".split);
if (_mod14876(() => {
  const obj = Object("z");
  return !obj.propertyIsEnumerable(0);
})) {
  fn = (arg0) => {
    let tmp2;
    if ("String" === _mod14881(arg0)) {
      tmp2 = closure_3(arg0, "");
    } else {
      tmp2 = Object(arg0);
    }
    return tmp2;
  };
}

export default fn;
