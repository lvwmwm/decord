// Module ID: 16049
// Function ID: 16050
// Dependencies: [16050, 16047, 16052]

// Module 16049
import _mod16047 from "module_16047" /* 16047 */;
import _mod16050 from "module_16050" /* 16050 */;
import _mod16052 from "module_16052" /* 16052 */;

let fn = Object;
let closure_3 = _mod16050("".split);
if (_mod16047(() => {
  const obj = Object("z");
  return !obj.propertyIsEnumerable(0);
})) {
  fn = (arg0) => {
    let tmp2;
    if ("String" === _mod16052(arg0)) {
      tmp2 = closure_3(arg0, "");
    } else {
      tmp2 = Object(arg0);
    }
    return tmp2;
  };
}

export default fn;
