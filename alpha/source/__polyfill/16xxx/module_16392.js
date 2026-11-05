// Module ID: 16392
// Function ID: 16393
// Dependencies: [16393, 16390, 16395]

// Module 16392
import _mod16390 from "module_16390" /* 16390 */;
import _mod16393 from "module_16393" /* 16393 */;
import _mod16395 from "module_16395" /* 16395 */;

let fn = Object;
let closure_3 = _mod16393("".split);
if (_mod16390(() => {
  const obj = Object("z");
  return !obj.propertyIsEnumerable(0);
})) {
  fn = (arg0) => {
    let tmp2;
    if ("String" === _mod16395(arg0)) {
      tmp2 = closure_3(arg0, "");
    } else {
      tmp2 = Object(arg0);
    }
    return tmp2;
  };
}

export default fn;
