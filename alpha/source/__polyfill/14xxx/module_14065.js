// Module ID: 14065
// Function ID: 14066
// Dependencies: [14066, 14063, 14068]

// Module 14065
import _mod14063 from "module_14063" /* 14063 */;
import _mod14066 from "module_14066" /* 14066 */;
import _mod14068 from "module_14068" /* 14068 */;

let fn = Object;
let closure_3 = _mod14066("".split);
if (_mod14063(() => {
  const obj = Object("z");
  return !obj.propertyIsEnumerable(0);
})) {
  fn = (arg0) => {
    let tmp2;
    if ("String" === _mod14068(arg0)) {
      tmp2 = closure_3(arg0, "");
    } else {
      tmp2 = Object(arg0);
    }
    return tmp2;
  };
}

export default fn;
