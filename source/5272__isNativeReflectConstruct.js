// Module ID: 5272
// Function ID: 45481
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 102, 18, 5256]

// Module 5272 (_isNativeReflectConstruct)
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
let closure_6 = { code: "function changeEventCalculator_Pnpm_rotationGestureTs1(current,previous){let changePayload;if(previous===undefined){changePayload={rotationChange:current.rotation};}else{changePayload={rotationChange:current.rotation-previous.rotation};}return{...current,...changePayload};}" };
let closure_7 = (() => {
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
})();

export const RotationGesture = ((ContinousBaseGesture) => {
  class RotationGesture {
    constructor() {
      self = this;
      tmp = RotationGesture(this, RotationGesture);
      obj = outer1_3(RotationGesture);
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
      tmp2Result.handlerName = "RotationGestureHandler";
      return tmp2Result;
    }
  }
  callback2(RotationGesture, ContinousBaseGesture);
  let items = [
    {
      key: "onChange",
      value: function onChange(arg0) {
        this.handlers.changeEventCalculator = outer1_7;
        const items = [arg0];
        return (function _superPropGet(RotationGesture, onChange, arg2, arg3) {
          let _callSuper = arg2;
          let prototype = RotationGesture;
          if (1) {
            prototype = RotationGesture.prototype;
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
        })(RotationGesture, "onChange", this, 3)(items);
      }
    }
  ];
  return callback(RotationGesture, items);
})(require("_callSuper").ContinousBaseGesture);
