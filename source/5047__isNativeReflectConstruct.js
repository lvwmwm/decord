// Module ID: 5047
// Function ID: 43044
// Name: _isNativeReflectConstruct
// Dependencies: [0, 0, 0, 0, 0, 0, 0]

// Module 5047 (_isNativeReflectConstruct)
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
let closure_6 = { code: "function changeEventCalculator_Pnpm_rotationGestureTs1(current,previous){let changePayload;if(previous===undefined){changePayload={rotationChange:current.rotation};}else{changePayload={rotationChange:current.rotation-previous.rotation};}return{...current,...changePayload};}" };
let closure_7 = () => {
  function changeEventCalculator(rotation, rotation2) {
    if (undefined === rotation2) {
      let obj = { rotationChange: rotation.rotation };
    } else {
      obj = { rotationChange: rotation.rotation - rotation2.rotation };
    }
    return Object.assign({}, rotation, obj);
  }
  changeEventCalculator.__closure = {};
  changeEventCalculator.__workletHash = 11988645380499;
  changeEventCalculator.__initData = closure_6;
  return changeEventCalculator;
}();

export const RotationGesture = (ContinousBaseGesture) => {
  class RotationGesture {
    constructor() {
      self = this;
      tmp = RotationGesture(this, RotationGesture);
      obj = closure_3(RotationGesture);
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
      tmp2Result.handlerName = "RotationGestureHandler";
      return tmp2Result;
    }
  }
  let result = RotationGesture;
  callback2(RotationGesture, ContinousBaseGesture);
  const items = [
    {
      key: "onChange",
      value: function onChange(arg0) {
        this.handlers.changeEventCalculator = closure_7;
        const items = [arg0];
        return function _superPropGet(RotationGesture, onChange, arg2, arg3) {
          let prototype = RotationGesture;
          if (1) {
            prototype = RotationGesture.prototype;
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
        }(RotationGesture, "onChange", this, 3)(items);
      }
    }
  ];
  return callback(RotationGesture, items);
}(require("result").ContinousBaseGesture);
