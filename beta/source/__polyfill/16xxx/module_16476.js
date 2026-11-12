// Module ID: 16476
// Function ID: 16477
// Dependencies: [16477, 16474, 16479]

// Module 16476
import _mod16474 from "module_16474" /* 16474 */;
import _mod16477 from "module_16477" /* 16477 */;
import _mod16479 from "module_16479" /* 16479 */;

let fn = Object;
let closure_3 = _mod16477("".split);
if (_mod16474(() => {
  const obj = Object("z");
  return !obj.propertyIsEnumerable(0);
})) {
  fn = (arg0) => {
    let tmp2;
    if ("String" === _mod16479(arg0)) {
      tmp2 = closure_3(arg0, "");
    } else {
      tmp2 = Object(arg0);
    }
    return tmp2;
  };
}

export default fn;
