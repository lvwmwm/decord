// Module ID: 16635
// Function ID: 16636
// Dependencies: [16636, 16633, 16638]

// Module 16635
import _mod16633 from "module_16633" /* 16633 */;
import _mod16636 from "module_16636" /* 16636 */;
import _mod16638 from "module_16638" /* 16638 */;

let fn = Object;
let closure_3 = _mod16636("".split);
if (_mod16633(() => {
  const obj = Object("z");
  return !obj.propertyIsEnumerable(0);
})) {
  fn = (arg0) => {
    let tmp2;
    if ("String" === _mod16638(arg0)) {
      tmp2 = closure_3(arg0, "");
    } else {
      tmp2 = Object(arg0);
    }
    return tmp2;
  };
}

export default fn;
