// Module ID: 5272
// Function ID: 45490
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 5272 (_isNativeReflectConstruct)
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
let closure_6 = { code: "function changeEventCalculator_Pnpm_forceTouchGestureTs1(current,previous){let changePayload;if(previous===undefined){changePayload={forceChange:current.force};}else{changePayload={forceChange:current.force-previous.force};}return{...current,...changePayload};}" };
let closure_7 = () => {
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
}();

export const ForceTouchGesture = (ContinousBaseGesture) => {
  class ForceTouchGesture {
    constructor() {
      self = this;
      tmp = ForceTouchGesture(this, ForceTouchGesture);
      obj = closure_3(ForceTouchGesture);
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
      tmp2Result.handlerName = "ForceTouchGestureHandler";
      return tmp2Result;
    }
  }
  let closure_0 = ForceTouchGesture;
  callback2(ForceTouchGesture, ContinousBaseGesture);
  let obj = {
    key: "minForce",
    value: function minForce(minForce) {
      this.config.minForce = minForce;
      return this;
    }
  };
  const items = [obj, , , ];
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
      this.handlers.changeEventCalculator = closure_7;
      const items = [arg0];
      return function _superPropGet(ForceTouchGesture, onChange, arg2, arg3) {
        let prototype = ForceTouchGesture;
        if (1) {
          prototype = ForceTouchGesture.prototype;
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
      }(ForceTouchGesture, "onChange", this, 3)(items);
    }
  };
  return callback(ForceTouchGesture, items);
}(arg1(dependencyMap[6]).ContinousBaseGesture);
