// Module ID: 14916
// Function ID: 14917
// Dependencies: [14917, 14914, 14919]

// Module 14916
import _mod14914 from "module_14914" /* 14914 */;
import _mod14917 from "module_14917" /* 14917 */;
import _mod14919 from "module_14919" /* 14919 */;

let fn = Object;
let closure_3 = _mod14917("".split);
if (_mod14914(() => {
  const obj = Object("z");
  return !obj.propertyIsEnumerable(0);
})) {
  fn = (arg0) => {
    let tmp2;
    if ("String" === _mod14919(arg0)) {
      tmp2 = closure_3(arg0, "");
    } else {
      tmp2 = Object(arg0);
    }
    return tmp2;
  };
}

export default fn;
