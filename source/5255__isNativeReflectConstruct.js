// Module ID: 5255
// Function ID: 45320
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 102, 18, 5256]

// Module 5255 (_isNativeReflectConstruct)
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
let closure_6 = { code: "function changeEventCalculator_Pnpm_hoverGestureTs1(current,previous){let changePayload;if(previous===undefined){changePayload={changeX:current.x,changeY:current.y};}else{changePayload={changeX:current.x-previous.x,changeY:current.y-previous.y};}return{...current,...changePayload};}" };
let closure_7 = (() => {
  function changeEventCalculator(arg0, arg1) {
    if (undefined === arg1) {
      let obj = {};
      ({ x: obj2.changeX, y: obj2.changeY } = arg0);
    } else {
      obj = { changeX: arg0.x - arg1.x, changeY: arg0.y - arg1.y };
    }
    return Object.assign({}, arg0, obj);
  }
  changeEventCalculator.__closure = {};
  changeEventCalculator.__workletHash = 2074844346342;
  changeEventCalculator.__initData = closure_6;
  return changeEventCalculator;
})();

export const HoverEffect = { NONE: 0, [0]: "NONE", LIFT: 1, [1]: "LIFT", HIGHLIGHT: 2, [2]: "HIGHLIGHT" };
export const hoverGestureHandlerProps = ["hoverEffect"];
export const HoverGesture = ((ContinousBaseGesture) => {
  class HoverGesture {
    constructor() {
      self = this;
      tmp = HoverGesture(this, HoverGesture);
      obj = outer1_3(HoverGesture);
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
      tmp2Result.handlerName = "HoverGestureHandler";
      return tmp2Result;
    }
  }
  callback2(HoverGesture, ContinousBaseGesture);
  let obj = {
    key: "effect",
    value: function effect(hoverEffect) {
      this.config.hoverEffect = hoverEffect;
      return this;
    }
  };
  let items = [obj, ];
  obj = {
    key: "onChange",
    value: function onChange(arg0) {
      this.handlers.changeEventCalculator = outer1_7;
      const items = [arg0];
      return (function _superPropGet(HoverGesture, onChange, arg2, arg3) {
        let _callSuper = arg2;
        let prototype = HoverGesture;
        if (1) {
          prototype = HoverGesture.prototype;
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
      })(HoverGesture, "onChange", this, 3)(items);
    }
  };
  items[1] = obj;
  return callback(HoverGesture, items);
})(require("_callSuper").ContinousBaseGesture);
