// Module ID: 5271
// Function ID: 45481
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 5271 (_isNativeReflectConstruct)
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

export const LongPressGesture = (BaseGesture) => {
  class LongPressGesture {
    constructor() {
      self = this;
      tmp = LongPressGesture(this, LongPressGesture);
      obj = closure_3(LongPressGesture);
      tmp2 = closure_2;
      if (closure_5()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_3;
        constructResult = Reflect.construct(obj, [], closure_3(self).constructor);
      } else {
        constructResult = obj.apply(self, undefined);
      }
      tmp2Result = tmp2(self, constructResult);
      tmp2Result.config = {};
      tmp2Result.handlerName = "LongPressGestureHandler";
      result = tmp2Result.shouldCancelWhenOutside(true);
      return tmp2Result;
    }
  }
  let closure_0 = LongPressGesture;
  callback2(LongPressGesture, BaseGesture);
  let obj = {
    key: "minDuration",
    value: function minDuration(CONTEXT_MENU_LONG_PRESS_DURATION_MS) {
      this.config.minDurationMs = CONTEXT_MENU_LONG_PRESS_DURATION_MS;
      return this;
    }
  };
  const items = [obj, , ];
  obj = {
    key: "maxDistance",
    value: function maxDistance(maxDist) {
      this.config.maxDist = maxDist;
      return this;
    }
  };
  items[1] = obj;
  obj = {
    key: "numberOfPointers",
    value: function numberOfPointers(numberOfPointers) {
      this.config.numberOfPointers = numberOfPointers;
      return this;
    }
  };
  items[2] = obj;
  return callback(LongPressGesture, items);
}(arg1(dependencyMap[5]).BaseGesture);
