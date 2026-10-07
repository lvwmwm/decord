// Module ID: 6266
// Function ID: 6267
// Name: LongPressGesture
// Dependencies: [41, 42, 93, 95, 98, 6161]

// Module 6266 (LongPressGesture)
import CALLBACK_TYPE from "CALLBACK_TYPE" /* 6161 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import map from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;

function _isNativeReflectConstruct() {
  try {
    const _Boolean = Boolean;
    const _Reflect = Reflect;
    const _Boolean2 = Boolean;
    let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

    }));
    _isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return closure_0;
    };
    return _isNativeReflectConstruct();
  } catch (err) {
  }
}
class LongPressGesture {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, LongPressGesture);
    const obj = _getPrototypeOf(LongPressGesture);
    const tmp2 = _getPrototypeOf;
    const tmp3 = map;
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, [], tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, undefined);
    }
    const tmp3Result = tmp3(self, constructResult);
    tmp3Result.config = {};
    tmp3Result.handlerName = "LongPressGestureHandler";
    const result = tmp3Result.shouldCancelWhenOutside(true);
    return tmp3Result;
  }
}
_inherits(LongPressGesture, CALLBACK_TYPE.BaseGesture);
const entry = {
  key: "minDuration",
  value: function minDuration(CONTEXT_MENU_LONG_PRESS_DURATION_MS) {
    this.config.minDurationMs = CONTEXT_MENU_LONG_PRESS_DURATION_MS;
    return this;
  }
};
const items = [
  entry,
  {
    key: "maxDistance",
    value: function maxDistance(maxDist) {
      this.config.maxDist = maxDist;
      return this;
    }
  },
  {
    key: "numberOfPointers",
    value: function numberOfPointers(numberOfPointers) {
      this.config.numberOfPointers = numberOfPointers;
      return this;
    }
  }
];
const LongPressGesture_export = _createClass(LongPressGesture, items);

export { LongPressGesture_export as LongPressGesture };
