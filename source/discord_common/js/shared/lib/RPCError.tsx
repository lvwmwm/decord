// Module ID: 10526
// Function ID: 81483
// Name: _isNativeReflectConstruct
// Dependencies: [7, 6, 15, 17, 18, 162, 2]

// Module 10526 (_isNativeReflectConstruct)
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
const tmp2 = ((arg0) => {
  class RPCError {
    constructor(arg0, arg1) {
      self = this;
      tmp = outer1_1(this, RPCError);
      items = [];
      items[0] = arg1;
      obj = outer1_3(RPCError);
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
      if ("closeCode" in arg0) {
        ({ closeCode: tmp6.code, closeCode: tmp6.closeCode } = arg0);
      } else {
        ({ errorCode: tmp6.code, errorCode: tmp6.errorCode } = arg0);
      }
      tmp2Result.message = arg1;
      tmp2Result.name = "RPCError";
      return tmp2Result;
    }
  }
  callback(RPCError, arg0);
  return RPCError(RPCError);
})(require("_wrapNativeSuper")(Error));
let result = require("_possibleConstructorReturn").fileFinishedImporting("../discord_common/js/shared/lib/RPCError.tsx");

export const RPCError = tmp2;
