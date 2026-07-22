// Module ID: 5270
// Function ID: 45473
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 5270 (_isNativeReflectConstruct)
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

export const FlingGesture = (BaseGesture) => {
  class FlingGesture {
    constructor() {
      self = this;
      tmp = FlingGesture(this, FlingGesture);
      obj = closure_3(FlingGesture);
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
      tmp2Result.handlerName = "FlingGestureHandler";
      return tmp2Result;
    }
  }
  let closure_0 = FlingGesture;
  callback2(FlingGesture, BaseGesture);
  let obj = {
    key: "numberOfPointers",
    value: function numberOfPointers(numberOfPointers) {
      this.config.numberOfPointers = numberOfPointers;
      return this;
    }
  };
  const items = [obj, ];
  obj = {
    key: "direction",
    value: function direction(DOWN) {
      this.config.direction = DOWN;
      return this;
    }
  };
  items[1] = obj;
  return callback(FlingGesture, items);
}(arg1(dependencyMap[5]).BaseGesture);
