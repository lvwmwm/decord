// Module ID: 5252
// Function ID: 45296
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 5252 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
let closure_2 = importDefault(dependencyMap[2]);
let closure_3 = importDefault(dependencyMap[3]);
let closure_4 = importDefault(dependencyMap[4]);
let closure_5 = importDefault(dependencyMap[5]);
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
export const hoverGestureHandlerProps = [];
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
  let closure_0 = HoverGesture;
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
}(arg1(dependencyMap[6]).ContinousBaseGesture);
