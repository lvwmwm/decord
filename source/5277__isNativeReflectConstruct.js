// Module ID: 5277
// Function ID: 45531
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 102, 18, 5256]

// Module 5277 (_isNativeReflectConstruct)
import _callSuper from "_callSuper";
import _defineProperties from "_defineProperties";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _get from "_get";
import _inherits from "_inherits";

function _isNativeReflectConstruct() {
  let _callSuper = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return _callSuper;
  }
  const result = _isNativeReflectConstruct();
}
let closure_6 = { code: "function changeEventCalculator_Pnpm_manualGestureTs1(current,_previous){return current;}" };
let closure_7 = (() => {
  function changeEventCalculator(arg0, arg1) {
    return arg0;
  }
  changeEventCalculator.__closure = {};
  changeEventCalculator.__workletHash = 12945462865583;
  changeEventCalculator.__initData = closure_6;
  return changeEventCalculator;
})();

export const ManualGesture = ((ContinousBaseGesture) => {
  class ManualGesture {
    constructor() {
      self = this;
      tmp = ManualGesture(this, ManualGesture);
      obj = outer1_3(ManualGesture);
      tmp2 = outer1_2;
      if (outer1_8()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = outer1_3;
        constructResult = Reflect.construct(obj, [], outer1_3(self).constructor);
      } else {
        constructResult = obj.apply(self, undefined);
      }
      tmp2Result = tmp2(self, constructResult);
      tmp2Result.handlerName = "ManualGestureHandler";
      return tmp2Result;
    }
  }
  callback2(ManualGesture, ContinousBaseGesture);
  let items = [
    {
      key: "onChange",
      value: function onChange(arg0) {
        this.handlers.changeEventCalculator = outer1_7;
        const items = [arg0];
        return (function _superPropGet(ManualGesture, onChange, arg2, arg3) {
          let _callSuper = arg2;
          let prototype = ManualGesture;
          if (1) {
            prototype = ManualGesture.prototype;
          }
          const tmpResult = outer2_4(outer2_3(prototype), "onChange", arg2);
          let _defineProperties = tmpResult;
          let fn = tmpResult;
          if (2) {
            fn = tmpResult;
            if ("function" === typeof tmpResult) {
              fn = (arg0) => tmpResult.apply(_callSuper, arg0);
            }
          }
          return fn;
        })(ManualGesture, "onChange", this, 3)(items);
      }
    }
  ];
  return callback(ManualGesture, items);
})(require("_callSuper").ContinousBaseGesture);
