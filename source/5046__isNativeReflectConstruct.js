// Module ID: 5046
// Function ID: 43033
// Name: _isNativeReflectConstruct
// Dependencies: [0, 0, 0, 0, 0, 0, 0]

// Module 5046 (_isNativeReflectConstruct)
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
let closure_6 = { code: "function changeEventCalculator_Pnpm_pinchGestureTs1(current,previous){let changePayload;if(previous===undefined){changePayload={scaleChange:current.scale};}else{changePayload={scaleChange:current.scale/previous.scale};}return{...current,...changePayload};}" };
let closure_7 = () => {
  function changeEventCalculator(scale, scale2) {
    if (undefined === scale2) {
      let obj = { scaleChange: scale.scale };
    } else {
      obj = { scaleChange: scale.scale / scale2.scale };
    }
    return Object.assign({}, scale, obj);
  }
  changeEventCalculator.__closure = {};
  changeEventCalculator.__workletHash = 9876979738005;
  changeEventCalculator.__initData = closure_6;
  return changeEventCalculator;
}();

export const PinchGesture = (ContinousBaseGesture) => {
  class PinchGesture {
    constructor() {
      self = this;
      tmp = PinchGesture(this, PinchGesture);
      obj = closure_3(PinchGesture);
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
      tmp2Result.handlerName = "PinchGestureHandler";
      return tmp2Result;
    }
  }
  let result = PinchGesture;
  callback2(PinchGesture, ContinousBaseGesture);
  const items = [
    {
      key: "onChange",
      value: function onChange(arg0) {
        this.handlers.changeEventCalculator = closure_7;
        const items = [arg0];
        return function _superPropGet(PinchGesture, onChange, arg2, arg3) {
          let prototype = PinchGesture;
          if (1) {
            prototype = PinchGesture.prototype;
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
        }(PinchGesture, "onChange", this, 3)(items);
      }
    }
  ];
  return callback(PinchGesture, items);
}(require("result").ContinousBaseGesture);
