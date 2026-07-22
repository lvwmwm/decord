// Module ID: 5269
// Function ID: 45462
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 5269 (_isNativeReflectConstruct)
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
  let closure_0 = RotationGesture;
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
}(arg1(dependencyMap[6]).ContinousBaseGesture);
