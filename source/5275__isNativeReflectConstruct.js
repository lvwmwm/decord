// Module ID: 5275
// Function ID: 45509
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 102, 18, 5256]

// Module 5275 (_isNativeReflectConstruct)
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
let closure_6 = { code: "function changeEventCalculator_Pnpm_forceTouchGestureTs1(current,previous){let changePayload;if(previous===undefined){changePayload={forceChange:current.force};}else{changePayload={forceChange:current.force-previous.force};}return{...current,...changePayload};}" };
let closure_7 = (() => {
  function changeEventCalculator(force, force2) {
    if (undefined === force2) {
      let obj = { forceChange: force.force };
    } else {
      obj = { forceChange: force.force - force2.force };
    }
    return Object.assign({}, force, obj);
  }
  changeEventCalculator.__closure = {};
  changeEventCalculator.__workletHash = 11365193947542;
  changeEventCalculator.__initData = closure_6;
  return changeEventCalculator;
})();

export const ForceTouchGesture = ((ContinousBaseGesture) => {
  class ForceTouchGesture {
    constructor() {
      self = this;
      tmp = ForceTouchGesture(this, ForceTouchGesture);
      obj = outer1_3(ForceTouchGesture);
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
      tmp2Result.config = {};
      tmp2Result.handlerName = "ForceTouchGestureHandler";
      return tmp2Result;
    }
  }
  callback2(ForceTouchGesture, ContinousBaseGesture);
  let obj = {
    key: "minForce",
    value: function minForce(minForce) {
      this.config.minForce = minForce;
      return this;
    }
  };
  let items = [obj, , , ];
  obj = {
    key: "maxForce",
    value: function maxForce(maxForce) {
      this.config.maxForce = maxForce;
      return this;
    }
  };
  items[1] = obj;
  obj = {
    key: "feedbackOnActivation",
    value: function feedbackOnActivation(feedbackOnActivation) {
      this.config.feedbackOnActivation = feedbackOnActivation;
      return this;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "onChange",
    value: function onChange(arg0) {
      this.handlers.changeEventCalculator = outer1_7;
      const items = [arg0];
      return (function _superPropGet(ForceTouchGesture, onChange, arg2, arg3) {
        let _callSuper = arg2;
        let prototype = ForceTouchGesture;
        if (1) {
          prototype = ForceTouchGesture.prototype;
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
      })(ForceTouchGesture, "onChange", this, 3)(items);
    }
  };
  return callback(ForceTouchGesture, items);
})(require("_callSuper").ContinousBaseGesture);
