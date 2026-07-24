// Module ID: 5274
// Function ID: 45505
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 5256]

// Module 5274 (_isNativeReflectConstruct)
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

export const LongPressGesture = ((BaseGesture) => {
  class LongPressGesture {
    constructor() {
      self = this;
      tmp = LongPressGesture(this, LongPressGesture);
      obj = outer1_3(LongPressGesture);
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
      tmp2Result.handlerName = "LongPressGestureHandler";
      result = tmp2Result.shouldCancelWhenOutside(true);
      return tmp2Result;
    }
  }
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
})(require("_callSuper").BaseGesture);
