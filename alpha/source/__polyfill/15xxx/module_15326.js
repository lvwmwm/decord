// Module ID: 15326
// Function ID: 15327
// Dependencies: [15327, 15324, 15329]

// Module 15326
import _mod15324 from "module_15324" /* 15324 */;
import _mod15327 from "module_15327" /* 15327 */;
import _mod15329 from "module_15329" /* 15329 */;

let fn = Object;
let closure_3 = _mod15327("".split);
if (_mod15324(() => {
  const obj = Object("z");
  return !obj.propertyIsEnumerable(0);
})) {
  fn = (arg0) => {
    let tmp2;
    if ("String" === _mod15329(arg0)) {
      tmp2 = closure_3(arg0, "");
    } else {
      tmp2 = Object(arg0);
    }
    return tmp2;
  };
}

export default fn;
