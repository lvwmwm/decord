// Module ID: 5030
// Function ID: 42878
// Name: _isNativeReflectConstruct
// Dependencies: [0, 0, 0, 0, 0, 0, 0]

// Module 5030 (_isNativeReflectConstruct)
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
let closure_6 = { code: "function changeEventCalculator_Pnpm_hoverGestureTs1(current,previous){let changePayload;if(previous===undefined){changePayload={changeX:current.x,changeY:current.y};}else{changePayload={changeX:current.x-previous.x,changeY:current.y-previous.y};}return{...current,...changePayload};}" };
let closure_7 = () => {
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
}();

export const HoverEffect = { NONE: 0, [0]: "NONE", LIFT: 1, [1]: "LIFT", HIGHLIGHT: 2, [2]: "HIGHLIGHT" };
export const hoverGestureHandlerProps = ["location"];
export const HoverGesture = (ContinousBaseGesture) => {
  class HoverGesture {
    constructor() {
      self = this;
      tmp = HoverGesture(this, HoverGesture);
      obj = closure_3(HoverGesture);
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
      tmp2Result.config = {};
      tmp2Result.handlerName = "HoverGestureHandler";
      return tmp2Result;
    }
  }
  let result = HoverGesture;
  callback2(HoverGesture, ContinousBaseGesture);
  let obj = {
    key: "effect",
    value: function effect(hoverEffect) {
      this.config.hoverEffect = hoverEffect;
      return this;
    }
  };
  const items = [obj, ];
  obj = {
    key: "onChange",
    value: function onChange(arg0) {
      this.handlers.changeEventCalculator = closure_7;
      const items = [arg0];
      return function _superPropGet(HoverGesture, onChange, arg2, arg3) {
        let prototype = HoverGesture;
        if (1) {
          prototype = HoverGesture.prototype;
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
      }(HoverGesture, "onChange", this, 3)(items);
    }
  };
  items[1] = obj;
  return callback(HoverGesture, items);
}(require("result").ContinousBaseGesture);
