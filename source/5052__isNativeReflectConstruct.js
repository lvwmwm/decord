// Module ID: 5052
// Function ID: 43094
// Name: _isNativeReflectConstruct
// Dependencies: [0, 0, 0, 0, 0, 0, 0]

// Module 5052 (_isNativeReflectConstruct)
import result from "result";
import closure_1 from "result";
import closure_2 from "result";
import closure_3 from "result";
import closure_4 from "result";
import closure_5 from "result";

function _isNativeReflectConstruct() {
  let result = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return result;
  }
  const result = _isNativeReflectConstruct();
}
let closure_6 = { code: "function changeEventCalculator_Pnpm_manualGestureTs1(current,_previous){return current;}" };
let closure_7 = () => {
  function changeEventCalculator(arg0, arg1) {
    return arg0;
  }
  changeEventCalculator.__closure = {};
  changeEventCalculator.__workletHash = 12945462865583;
  changeEventCalculator.__initData = closure_6;
  return changeEventCalculator;
}();

export const ManualGesture = (ContinousBaseGesture) => {
  class ManualGesture {
    constructor() {
      self = this;
      tmp = ManualGesture(this, ManualGesture);
      obj = closure_3(ManualGesture);
      tmp2 = closure_2;
      if (closure_8()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_3;
        constructResult = Reflect.construct(obj, [], closure_3(self).constructor);
      } else {
        constructResult = obj.apply(self, undefined);
      }
      tmp2Result = tmp2(self, constructResult);
      tmp2Result.handlerName = "ManualGestureHandler";
      return tmp2Result;
    }
  }
  let result = ManualGesture;
  callback2(ManualGesture, ContinousBaseGesture);
  const items = [
    {
      key: "onChange",
      value: function onChange(arg0) {
        this.handlers.changeEventCalculator = closure_7;
        const items = [arg0];
        return function _superPropGet(ManualGesture, onChange, arg2, arg3) {
          let prototype = ManualGesture;
          if (1) {
            prototype = ManualGesture.prototype;
          }
          const tmpResult = closure_4(closure_3(prototype), "onChange", arg2);
          let fn = tmpResult;
          if (2) {
            fn = tmpResult;
            if ("function" === typeof tmpResult) {
              fn = (arg0) => tmpResult.apply(arg2, arg0);
            }
          }
          return fn;
        }(ManualGesture, "onChange", this, 3)(items);
      }
    }
  ];
  return callback(ManualGesture, items);
}(require("result").ContinousBaseGesture);
