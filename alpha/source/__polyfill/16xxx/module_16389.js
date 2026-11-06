// Module ID: 16389
// Function ID: 16390
// Dependencies: [16390, 16387, 16392]

// Module 16389
import _mod16387 from "module_16387" /* 16387 */;
import _mod16390 from "module_16390" /* 16390 */;
import _mod16392 from "module_16392" /* 16392 */;

let fn = Object;
let closure_3 = _mod16390("".split);
if (_mod16387(() => {
  const obj = Object("z");
  return !obj.propertyIsEnumerable(0);
})) {
  fn = (arg0) => {
    let tmp2;
    if ("String" === _mod16392(arg0)) {
      tmp2 = closure_3(arg0, "");
    } else {
      tmp2 = Object(arg0);
    }
    return tmp2;
  };
}

export default fn;
