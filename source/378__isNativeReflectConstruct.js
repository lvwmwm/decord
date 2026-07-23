// Module ID: 378
// Function ID: 5639
// Name: _isNativeReflectConstruct
// Dependencies: [153, 6, 7, 15, 17, 102, 18, 355, 372]

// Module 378 (_isNativeReflectConstruct)
import "_readOnlyError";
import _inherits from "_inherits";
import closure_5 from "A";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _get from "_get";
import closure_9 from "_inherits";

let require = arg1;
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
  const require = tmpResult;
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
  class TimingAnimation {
    constructor(arg0) {
      self = this;
      tmp = outer1_4(this, TimingAnimation);
      items = [];
      items[0] = arg0;
      obj = outer1_7(TimingAnimation);
      tmp2 = outer1_6;
      if (outer1_10()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = outer1_7;
        constructResult = Reflect.construct(obj, items, outer1_7(self).constructor);
      } else {
        constructResult = obj.apply(self, items);
      }
      tmp2Result = tmp2(self, constructResult);
      ({ toValue: tmp6._toValue, easing } = arg0);
      if (null == easing) {
        tmp7 = outer1_3;
        if (!outer1_3) {
          tmp8 = outer1_1;
          tmp9 = outer1_2;
          num = 7;
          _default = outer1_1(outer1_2[7]).default;
          outer1_3 = _default.inOut(_default.ease);
        }
        easing = outer1_3;
      }
      tmp2Result._easing = easing;
      duration = arg0.duration;
      num2 = 500;
      if (null != duration) {
        num2 = duration;
      }
      tmp2Result._duration = num2;
      delay = arg0.delay;
      num3 = 0;
      if (null != delay) {
        num3 = delay;
      }
      tmp2Result._delay = num3;
      tmp2Result._platformConfig = arg0.platformConfig;
      return tmp2Result;
    }
  }
  callback2(TimingAnimation, arg0);
  let obj = {
    key: "__getNativeAnimationConfig",
    value: function __getNativeAnimationConfig() {
      const self = this;
      const items = [];
      const rounded = Math.round(this._duration / 16.666666666666668);
      for (let num = 0; num < rounded; num = num + 1) {
        let arr = items.push(self._easing(num / rounded));
      }
      items.push(self._easing(1));
      return { type: "frames", frames: items, toValue: self._toValue, iterations: self.__iterations, platformConfig: self._platformConfig, debugID: self.__getDebugID() };
    }
  };
  let items = [obj, , , ];
  obj = {
    key: "start",
    value: function start(_fromValue, _onUpdate) {
      let self = this;
      let closure_0 = arg4;
      self = this;
      const items = [_fromValue, _onUpdate, arg2, arg3, arg4];
      outer1_11(closure_0, "start", this, 3)(items);
      this._fromValue = _fromValue;
      this._onUpdate = _onUpdate;
      function start() {
        self._startTime = Date.now();
        if (!self.__startAnimationIfNative(closure_0)) {
          if (0 === self._duration) {
            self._onUpdate(self._toValue);
            const obj = { finished: true };
            self.__notifyAnimationEnd(obj);
          } else {
            const _requestAnimationFrame = requestAnimationFrame;
            self._animationFrame = requestAnimationFrame(() => outer1_1.onUpdate());
          }
        }
      }
      if (this._delay) {
        const _setTimeout = setTimeout;
        self._timeout = setTimeout(start, self._delay);
      } else {
        start();
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "onUpdate",
    value: function onUpdate() {
      let _fromValue;
      let _fromValue2;
      let _onUpdate;
      let _onUpdate2;
      const self = this;
      const timestamp = Date.now();
      if (timestamp >= this._startTime + this._duration) {
        if (0 === self._duration) {
          self._onUpdate(self._toValue);
        } else {
          ({ _onUpdate: _onUpdate2, _fromValue: _fromValue2 } = self);
          _onUpdate2(_fromValue2 + self._easing(1) * (self._toValue - self._fromValue));
        }
        const obj = { finished: true };
        self.__notifyAnimationEnd(obj);
      } else {
        ({ _onUpdate, _fromValue } = self);
        _onUpdate(_fromValue + self._easing((timestamp - self._startTime) / self._duration) * (self._toValue - self._fromValue));
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
      outer1_11(TimingAnimation, "stop", this, 3)([]);
      clearTimeout(this._timeout);
      if (null != this._animationFrame) {
        TimingAnimation.cancelAnimationFrame(self._animationFrame);
      }
      self.__notifyAnimationEnd({ finished: false });
    }
  };
  return callback(TimingAnimation, items);
})(require("Animation"));
