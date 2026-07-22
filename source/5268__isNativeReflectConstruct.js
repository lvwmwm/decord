// Module ID: 5268
// Function ID: 45451
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 5268 (_isNativeReflectConstruct)
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
  let closure_0 = PinchGesture;
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
}(arg1(dependencyMap[6]).ContinousBaseGesture);
