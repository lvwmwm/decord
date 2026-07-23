// Module ID: 379
// Function ID: 5653
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 102, 18, 372]

// Module 379 (_isNativeReflectConstruct)
import Animation from "Animation";
import _defineProperties from "_defineProperties";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _get from "_get";
import _inherits from "_inherits";

function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function _superPropGet(arg0, arg1, arg2, arg3) {
  let closure_0 = arg2;
  let prototype = arg0;
  if (1) {
    prototype = arg0.prototype;
  }
  const tmpResult = _get(_getPrototypeOf(prototype), arg1, arg2);
  let Animation = tmpResult;
  let fn = tmpResult;
  if (2) {
    fn = tmpResult;
    if ("function" === typeof tmpResult) {
      fn = (arg0) => tmpResult.apply(closure_0, arg0);
    }
  }
  return fn;
}

export default ((arg0) => {
  class DecayAnimation {
    constructor(arg0) {
      self = this;
      tmp = outer1_1(this, DecayAnimation);
      items = [];
      items[0] = arg0;
      obj = outer1_4(DecayAnimation);
      tmp2 = outer1_3;
      if (outer1_7()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = outer1_4;
        constructResult = Reflect.construct(obj, items, outer1_4(self).constructor);
      } else {
        constructResult = obj.apply(self, items);
      }
      tmp2Result = tmp2(self, constructResult);
      deceleration = arg0.deceleration;
      num = 0.998;
      if (null != deceleration) {
        num = deceleration;
      }
      tmp2Result._deceleration = num;
      ({ velocity: tmp6._velocity, platformConfig: tmp6._platformConfig } = arg0);
      return tmp2Result;
    }
  }
  callback2(DecayAnimation, arg0);
  let obj = {
    key: "__getNativeAnimationConfig",
    value: function __getNativeAnimationConfig() {
      return { type: "decay", deceleration: this._deceleration, velocity: this._velocity, iterations: this.__iterations, platformConfig: this._platformConfig, debugID: this.__getDebugID() };
    }
  };
  let items = [obj, , , ];
  obj = {
    key: "start",
    value: function start(_lastValue, _onUpdate, arg2, arg3, closure_0) {
      const self = this;
      const items = [_lastValue, _onUpdate, arg2, arg3, closure_0];
      outer1_8(self, "start", this, 3)(items);
      this._lastValue = _lastValue;
      this._fromValue = _lastValue;
      this._onUpdate = _onUpdate;
      this._startTime = Date.now();
      if (!this.__startAnimationIfNative(closure_0)) {
        const _requestAnimationFrame = requestAnimationFrame;
        this._animationFrame = requestAnimationFrame(() => self.onUpdate());
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "onUpdate",
    value: function onUpdate() {
      const self = this;
      const result = this._velocity / (1 - this._deceleration);
      const sum = this._fromValue + result * (1 - Math.exp(-1 - this._deceleration * (Date.now() - this._startTime)));
      this._onUpdate(sum);
      if (Math.abs(this._lastValue - sum) < 0.1) {
        const obj = { finished: true };
        self.__notifyAnimationEnd(obj);
      } else {
        self._lastValue = sum;
        if (self.__active) {
          const _requestAnimationFrame = requestAnimationFrame;
          const onUpdate = self.onUpdate;
          self._animationFrame = requestAnimationFrame(onUpdate.bind(self));
        }
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: "stop",
    value: function stop() {
      const self = this;
      outer1_8(DecayAnimation, "stop", this, 3)([]);
      if (null != this._animationFrame) {
        DecayAnimation.cancelAnimationFrame(self._animationFrame);
      }
      self.__notifyAnimationEnd({ finished: false });
    }
  };
  return callback(DecayAnimation, items);
})(require("Animation"));
