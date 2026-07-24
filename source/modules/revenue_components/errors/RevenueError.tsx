// Module ID: 8248
// Function ID: 65115
// Name: _isNativeReflectConstruct
// Dependencies: [7, 6, 15, 17, 18, 162, 2]

// Module 8248 (_isNativeReflectConstruct)
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
  class RevenueError {
    constructor(arg0) {
      self = this;
      prop = arg0.extraSentryInformation;
      if (prop === undefined) {
        prop = null;
      }
      str = arg0.errorHandlingBehavior;
      if (str === undefined) {
        str = "close-and-alert";
      }
      flag = arg0.skipReportingToSentry;
      if (flag === undefined) {
        flag = false;
      }
      tmp2 = outer1_1(self, RevenueError);
      items = [];
      items[0] = arg0.message;
      obj = outer1_3(RevenueError);
      tmp3 = outer1_2;
      if (outer1_5()) {
        tmp5 = globalThis;
        _Reflect = Reflect;
        tmp6 = outer1_3;
        constructResult = Reflect.construct(obj, items, outer1_3(self).constructor);
      } else {
        constructResult = obj.apply(self, items);
      }
      tmp3Result = tmp3(self, constructResult);
      tmp3Result.name = new.target.name;
      tmp3Result.extraSentryInformation = prop;
      tmp3Result.errorHandlingBehavior = str;
      tmp3Result.skipReportingToSentry = flag;
      return tmp3Result;
    }
  }
  callback(RevenueError, arg0);
  return RevenueError(RevenueError);
})(require("_wrapNativeSuper")(Error));
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/revenue_components/errors/RevenueError.tsx");

export const RevenueError = tmp2;
