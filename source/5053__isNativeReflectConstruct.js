// Module ID: 5053
// Function ID: 43142
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 5053 (_isNativeReflectConstruct)
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
  let closure_0 = ManualGesture;
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
}(arg1(dependencyMap[6]).ContinousBaseGesture);
