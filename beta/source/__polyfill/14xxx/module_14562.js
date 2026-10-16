// Module ID: 14562
// Function ID: 14563
// Dependencies: [14563, 14560, 14565]

// Module 14562
import _mod14560 from "module_14560" /* 14560 */;
import _mod14563 from "module_14563" /* 14563 */;
import _mod14565 from "module_14565" /* 14565 */;

let fn = Object;
let closure_3 = _mod14563("".split);
if (_mod14560(() => {
  const obj = Object("z");
  return !obj.propertyIsEnumerable(0);
})) {
  fn = (arg0) => {
    let tmp2;
    if ("String" === _mod14565(arg0)) {
      tmp2 = closure_3(arg0, "");
    } else {
      tmp2 = Object(arg0);
    }
    return tmp2;
  };
}

export default fn;
