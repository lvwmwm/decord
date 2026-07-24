// Module ID: 4031
// Function ID: 33571
// Name: _callSuper
// Dependencies: [7, 6, 16, 15, 17, 18, 3798, 2]

// Module 4031 (_callSuper)
import set from "set";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _assertThisInitialized from "_assertThisInitialized";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import tmp2 from "_isNativeReflectConstruct";

function _callSuper(arg0, arg1, arg2) {
  let items = arg2;
  const obj = callback(arg1);
  if (_isNativeReflectConstruct()) {
    if (!items) {
      items = [];
    }
    let constructResult = Reflect.construct(obj, items, callback(arg0).constructor);
  } else {
    constructResult = obj.apply(arg0, items);
  }
  return _possibleConstructorReturn(arg0, constructResult);
}
function _isNativeReflectConstruct() {
  let set = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return set;
  }
  const result = _isNativeReflectConstruct();
}
let result = require("_assertThisInitialized").fileFinishedImporting("errors/StripeError.tsx");

export default tmp2;
