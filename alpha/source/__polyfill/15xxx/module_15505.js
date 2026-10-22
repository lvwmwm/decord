// Module ID: 15505
// Function ID: 15506
// Dependencies: [15506, 15503, 15508]

// Module 15505
import _mod15503 from "module_15503" /* 15503 */;
import _mod15506 from "module_15506" /* 15506 */;
import _mod15508 from "module_15508" /* 15508 */;

let fn = Object;
let closure_3 = _mod15506("".split);
if (_mod15503(() => {
  const obj = Object("z");
  return !obj.propertyIsEnumerable(0);
})) {
  fn = (arg0) => {
    let tmp2;
    if ("String" === _mod15508(arg0)) {
      tmp2 = closure_3(arg0, "");
    } else {
      tmp2 = Object(arg0);
    }
    return tmp2;
  };
}

export default fn;
