// Module ID: 6447
// Function ID: 6448
// Name: TapGesture
// Dependencies: [41, 42, 93, 95, 98, 6347]

// Module 6447 (TapGesture)
import CALLBACK_TYPE from "CALLBACK_TYPE" /* 6347 */;
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
class TapGesture {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, TapGesture);
    const obj = _getPrototypeOf(TapGesture);
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
    tmp3Result.handlerName = "TapGestureHandler";
    const result = tmp3Result.shouldCancelWhenOutside(true);
    return tmp3Result;
  }
}
_inherits(TapGesture, CALLBACK_TYPE.BaseGesture);
const entry = {
  key: "minPointers",
  value: function minPointers(minPointers) {
    this.config.minPointers = minPointers;
    return this;
  }
};
const items = [
  entry,
  {
    key: "numberOfTaps",
    value: function numberOfTaps(numberOfTaps) {
      this.config.numberOfTaps = numberOfTaps;
      return this;
    }
  },
  {
    key: "maxDistance",
    value: function maxDistance(maxDist) {
      this.config.maxDist = maxDist;
      return this;
    }
  },
  {
    key: "maxDuration",
    value: function maxDuration(maxDurationMs) {
      this.config.maxDurationMs = maxDurationMs;
      return this;
    }
  },
  {
    key: "maxDelay",
    value: function maxDelay(maxDelayMs) {
      this.config.maxDelayMs = maxDelayMs;
      return this;
    }
  },
  {
    key: "maxDeltaX",
    value: function maxDeltaX(maxDeltaX) {
      this.config.maxDeltaX = maxDeltaX;
      return this;
    }
  },
  {
    key: "maxDeltaY",
    value: function maxDeltaY(maxDeltaY) {
      this.config.maxDeltaY = maxDeltaY;
      return this;
    }
  }
];
const TapGesture_export = _createClass(TapGesture, items);

export { TapGesture_export as TapGesture };
