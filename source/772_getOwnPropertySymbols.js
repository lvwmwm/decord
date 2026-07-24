// Module ID: 772
// Function ID: 8847
// Name: getOwnPropertySymbols
// Dependencies: [773, 774]

// Module 772 (getOwnPropertySymbols)
if (getOwnPropertySymbols) {
  let fn = (arg0) => {
    let _require = arg0;
    if (null == arg0) {
      let items = [];
    } else {
      const _Object = Object;
      const ObjectResult = Object(arg0);
      _require = ObjectResult;
      items = _require(774)(getOwnPropertySymbols(ObjectResult), (arg0) => outer1_2.call(closure_0, arg0));
      const tmp5 = _require(774);
    }
    return items;
  };
} else {
  fn = require("stubArray");
}

export default fn;
