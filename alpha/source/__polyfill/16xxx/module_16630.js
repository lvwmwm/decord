// Module ID: 16630
// Function ID: 16631
// Dependencies: [16631, 16628, 16633]

// Module 16630
import _mod16628 from "module_16628" /* 16628 */;
import _mod16631 from "module_16631" /* 16631 */;
import _mod16633 from "module_16633" /* 16633 */;

let fn = Object;
let closure_3 = _mod16631("".split);
if (_mod16628(() => {
  const obj = Object("z");
  return !obj.propertyIsEnumerable(0);
})) {
  fn = (arg0) => {
    let tmp2;
    if ("String" === _mod16633(arg0)) {
      tmp2 = closure_3(arg0, "");
    } else {
      tmp2 = Object(arg0);
    }
    return tmp2;
  };
}

export default fn;
