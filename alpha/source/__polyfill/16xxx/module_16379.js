// Module ID: 16379
// Function ID: 16380
// Dependencies: [16380, 16377, 16382]

// Module 16379
import _mod16377 from "module_16377" /* 16377 */;
import _mod16380 from "module_16380" /* 16380 */;
import _mod16382 from "module_16382" /* 16382 */;

let fn = Object;
let closure_3 = _mod16380("".split);
if (_mod16377(() => {
  const obj = Object("z");
  return !obj.propertyIsEnumerable(0);
})) {
  fn = (arg0) => {
    let tmp2;
    if ("String" === _mod16382(arg0)) {
      tmp2 = closure_3(arg0, "");
    } else {
      tmp2 = Object(arg0);
    }
    return tmp2;
  };
}

export default fn;
