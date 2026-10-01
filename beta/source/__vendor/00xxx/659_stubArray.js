// Module ID: 659
// Function ID: 660
// Name: stubArray
// Dependencies: [660, 661]

// Module 659 (stubArray)
import stubArray from "stubArray" /* 660 */;

const require = globalThis.__r;
let _require;

let fn;
if (getOwnPropertySymbols) {
  fn = (arg0) => {
    let closure_0;
    let items;
    _require = arg0;
    if (null == arg0) {
      items = [];
    } else {
      const _Object = Object;
      const ObjectResult = Object(arg0);
      _require = ObjectResult;
      const tmp5 = require("arrayFilter");
      items = tmp5(getOwnPropertySymbols(ObjectResult), (arg0) => propertyIsEnumerable.call(closure_0, arg0));
    }
    return items;
  };
} else {
  fn = stubArray;
}

export default fn;
