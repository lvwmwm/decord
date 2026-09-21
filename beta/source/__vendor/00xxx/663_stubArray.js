// Module ID: 663
// Function ID: 664
// Name: stubArray
// Dependencies: [664, 665]

// Module 663 (stubArray)
import _mod664 from "module_664" /* 664 */;

const require = globalThis.__r;

if (getOwnPropertySymbols) {
  let fn = (arg0) => {
    _require = arg0;
    if (null == arg0) {
      let items = [];
    } else {
      const _Object = Object;
      const ObjectResult = Object(arg0);
      _require = ObjectResult;
      items = require("arrayFilter")(getOwnPropertySymbols(ObjectResult), (arg0) => {
        const call = propertyIsEnumerable.call;
        return typeof call === "unknown" ? propertyIsEnumerable(arg0) : call(closure_0, arg0);
      });
      const tmp5 = require("arrayFilter");
    }
    return items;
  };
} else {
  fn = _mod664;
}

export default fn;
