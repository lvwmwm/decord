// Module ID: 16447
// Function ID: 16448
// Dependencies: [16448, 16445, 16450]

// Module 16447
import _mod16445 from "module_16445" /* 16445 */;
import _mod16448 from "module_16448" /* 16448 */;
import _mod16450 from "module_16450" /* 16450 */;

let fn = Object;
let closure_3 = _mod16448("".split);
if (_mod16445(() => {
  const obj = Object("z");
  return !obj.propertyIsEnumerable(0);
})) {
  fn = (arg0) => {
    let tmp2;
    if ("String" === _mod16450(arg0)) {
      tmp2 = closure_3(arg0, "");
    } else {
      tmp2 = Object(arg0);
    }
    return tmp2;
  };
}

export default fn;
