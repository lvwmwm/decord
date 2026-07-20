// Module ID: 5044
// Function ID: 42996
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 5044 (_isNativeReflectConstruct)
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

export const TapGesture = (BaseGesture) => {
  class TapGesture {
    constructor() {
      self = this;
      tmp = TapGesture(this, TapGesture);
      obj = closure_3(TapGesture);
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
      tmp2Result.handlerName = "TapGestureHandler";
      result = tmp2Result.shouldCancelWhenOutside(true);
      return tmp2Result;
    }
  }
  let closure_0 = TapGesture;
  callback2(TapGesture, BaseGesture);
  let obj = {
    key: "minPointers",
    value: function minPointers(minPointers) {
      this.config.minPointers = minPointers;
      return this;
    }
  };
  const items = [obj, , , , , , ];
  obj = {
    key: "numberOfTaps",
    value: function numberOfTaps(numberOfTaps) {
      this.config.numberOfTaps = numberOfTaps;
      return this;
    }
  };
  items[1] = obj;
  obj = {
    key: "maxDistance",
    value: function maxDistance(maxDist) {
      this.config.maxDist = maxDist;
      return this;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "maxDuration",
    value: function maxDuration(maxDurationMs) {
      this.config.maxDurationMs = maxDurationMs;
      return this;
    }
  };
  items[4] = {
    key: "maxDelay",
    value: function maxDelay(maxDelayMs) {
      this.config.maxDelayMs = maxDelayMs;
      return this;
    }
  };
  items[5] = {
    key: "maxDeltaX",
    value: function maxDeltaX(maxDeltaX) {
      this.config.maxDeltaX = maxDeltaX;
      return this;
    }
  };
  items[6] = {
    key: "maxDeltaY",
    value: function maxDeltaY(maxDeltaY) {
      this.config.maxDeltaY = maxDeltaY;
      return this;
    }
  };
  return callback(TapGesture, items);
}(arg1(dependencyMap[5]).BaseGesture);
