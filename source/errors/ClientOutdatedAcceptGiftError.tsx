// Module ID: 4035
// Function ID: 33591
// Name: _isNativeReflectConstruct
// Dependencies: [7, 6, 15, 17, 18, 162, 653, 2]

// Module 4035 (_isNativeReflectConstruct)
import set from "set";
import ME from "ME";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import { AbortCodes } from "ME";
import importDefaultResult from "_wrapNativeSuper";

function _isNativeReflectConstruct() {
  let set = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return set;
  }
  const result = _isNativeReflectConstruct();
}
const tmp3 = ((arg0) => {
  class ClientOutdatedAcceptGiftError {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = outer1_1(this, ClientOutdatedAcceptGiftError);
      items1 = [...items];
      obj = outer1_3(ClientOutdatedAcceptGiftError);
      tmp2 = outer1_2;
      if (outer1_6()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = outer1_3;
        constructResult = Reflect.construct(obj, items1, outer1_3(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      tmp2Result.code = outer1_5.INVALID_GIFT_REDEMPTION_CLIENT_UPDATE_REQUIRED;
      return tmp2Result;
    }
  }
  callback(ClientOutdatedAcceptGiftError, arg0);
  return ClientOutdatedAcceptGiftError(ClientOutdatedAcceptGiftError);
})(require("_wrapNativeSuper")(Error));
let result = require("_possibleConstructorReturn").fileFinishedImporting("errors/ClientOutdatedAcceptGiftError.tsx");

export default tmp3;
