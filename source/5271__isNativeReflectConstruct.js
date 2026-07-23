// Module ID: 5271
// Function ID: 45470
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 102, 18, 5256]

// Module 5271 (_isNativeReflectConstruct)
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
let closure_6 = { code: "function changeEventCalculator_Pnpm_pinchGestureTs1(current,previous){let changePayload;if(previous===undefined){changePayload={scaleChange:current.scale};}else{changePayload={scaleChange:current.scale/previous.scale};}return{...current,...changePayload};}" };
let closure_7 = (() => {
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
})();

export const PinchGesture = ((ContinousBaseGesture) => {
  class PinchGesture {
    constructor() {
      self = this;
      tmp = PinchGesture(this, PinchGesture);
      obj = outer1_3(PinchGesture);
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
      tmp2Result.handlerName = "PinchGestureHandler";
      return tmp2Result;
    }
  }
  callback2(PinchGesture, ContinousBaseGesture);
  let items = [
    {
      key: "onChange",
      value: function onChange(arg0) {
        this.handlers.changeEventCalculator = outer1_7;
        const items = [arg0];
        return (function _superPropGet(PinchGesture, onChange, arg2, arg3) {
          let _callSuper = arg2;
          let prototype = PinchGesture;
          if (1) {
            prototype = PinchGesture.prototype;
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
        })(PinchGesture, "onChange", this, 3)(items);
      }
    }
  ];
  return callback(PinchGesture, items);
})(require("_callSuper").ContinousBaseGesture);
