// Module ID: 16089
// Function ID: 16090
// Dependencies: [16090, 16087, 16092]

// Module 16089
import _mod16087 from "module_16087" /* 16087 */;
import _mod16090 from "module_16090" /* 16090 */;
import _mod16092 from "module_16092" /* 16092 */;

let fn = Object;
let closure_3 = _mod16090("".split);
if (_mod16087(() => {
  const obj = Object("z");
  return !obj.propertyIsEnumerable(0);
})) {
  fn = (arg0) => {
    let tmp2;
    if ("String" === _mod16092(arg0)) {
      tmp2 = closure_3(arg0, "");
    } else {
      tmp2 = Object(arg0);
    }
    return tmp2;
  };
}

export default fn;
