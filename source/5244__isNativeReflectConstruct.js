// Module ID: 5244
// Function ID: 45280
// Name: _isNativeReflectConstruct
// Dependencies: [65, 6, 7, 15, 17, 18, 31, 5245, 5221, 5236, 5234]

// Module 5244 (_isNativeReflectConstruct)
import result from "result";
import PlatformConstants from "PlatformConstants";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import importDefaultResult from "_toConsumableArray";
import importDefaultResult2 from "PlatformConstants";

const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let items = ["minForce", "maxForce", "feedbackOnActivation"];
const tmp5 = ((Component) => {
  class ForceTouchFallback {
    constructor() {
      self = this;
      tmp = outer1_2(this, ForceTouchFallback);
      obj = outer1_5(ForceTouchFallback);
      tmp2 = outer1_4;
      if (outer1_7()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_5;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_5(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(ForceTouchFallback, Component);
  let obj = {
    key: "componentDidMount",
    value: function componentDidMount() {
      console.warn(ForceTouchFallback(outer1_1[8]).tagMessage("ForceTouchGestureHandler is not available on this platform. Please use ForceTouchGestureHandler.forceTouchAvailable to conditionally render other components that would provide a fallback behavior specific to your usecase"));
    }
  };
  const items = [obj, ];
  obj = {
    key: "render",
    value: function render() {
      return this.props.children;
    }
  };
  items[1] = obj;
  return callback(ForceTouchFallback, items);
})(require("result").Component);
tmp5.forceTouchAvailable = false;
let importDefaultResult3Result = tmp5;
if (null != importDefaultResult2) {
  importDefaultResult3Result = tmp5;
  if (importDefaultResult2.forceTouchAvailable) {
    let obj = { name: "ForceTouchGestureHandler" };
    const items1 = [];
    obj.allowedProps = items1.concat(importDefaultResult(require("combined").baseGestureHandlerProps), items);
    obj.config = {};
    importDefaultResult3Result = require("_isNativeReflectConstruct")(obj);
    const importDefaultResult3 = require("_isNativeReflectConstruct");
  }
}
let flag;
if (null != importDefaultResult2) {
  flag = importDefaultResult2.forceTouchAvailable;
}
if (!flag) {
  flag = false;
}
importDefaultResult3Result.forceTouchAvailable = flag;

export const forceTouchGestureHandlerProps = items;
export const forceTouchHandlerName = "ForceTouchGestureHandler";
export const ForceTouchGestureHandler = importDefaultResult3Result;
