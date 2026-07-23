// Module ID: 8203
// Function ID: 64881
// Name: _isNativeReflectConstruct
// Dependencies: [7, 6, 15, 17, 18, 8204, 2]

// Module 8203 (_isNativeReflectConstruct)
import _defineProperties from "_defineProperties";
import set from "set";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";

function _isNativeReflectConstruct() {
  let _defineProperties = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return _defineProperties;
  }
  const result = _isNativeReflectConstruct();
}
const tmp2 = ((RevenueError) => {
  class CheckoutError {
    constructor(arg0) {
      self = this;
      tmp = outer1_1(this, CheckoutError);
      items = [];
      items[0] = RevenueError;
      obj = outer1_3(CheckoutError);
      tmp2 = outer1_2;
      if (outer1_5()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = outer1_3;
        constructResult = Reflect.construct(obj, items, outer1_3(self).constructor);
      } else {
        constructResult = obj.apply(self, items);
      }
      tmp2Result = tmp2(self, constructResult);
      tmp2Result.name = "FatalCheckoutError";
      return tmp2Result;
    }
  }
  callback(CheckoutError, RevenueError);
  return CheckoutError(CheckoutError);
})(require("_isNativeReflectConstruct").RevenueError);
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/checkout/CheckoutError.tsx");

export const CheckoutError = tmp2;
