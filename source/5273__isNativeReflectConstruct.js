// Module ID: 5273
// Function ID: 45492
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 5256]

// Module 5273 (_isNativeReflectConstruct)
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";

function _isNativeReflectConstruct() {
  let _classCallCheck = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return _classCallCheck;
  }
  const result = _isNativeReflectConstruct();
}

export const FlingGesture = ((BaseGesture) => {
  class FlingGesture {
    constructor() {
      self = this;
      tmp = FlingGesture(this, FlingGesture);
      obj = outer1_3(FlingGesture);
      tmp2 = outer1_2;
      if (outer1_5()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = outer1_3;
        constructResult = Reflect.construct(obj, [], outer1_3(self).constructor);
      } else {
        constructResult = obj.apply(self, undefined);
      }
      tmp2Result = tmp2(self, constructResult);
      tmp2Result.config = {};
      tmp2Result.handlerName = "FlingGestureHandler";
      return tmp2Result;
    }
  }
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
})(require("_callSuper").BaseGesture);
