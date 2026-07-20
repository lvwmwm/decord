// Module ID: 379
// Function ID: 5653
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 379 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function _superPropGet(arg0, arg1, arg2, arg3) {
  const global = arg2;
  let prototype = arg0;
  if (1) {
    prototype = arg0.prototype;
  }
  const tmpResult = closure_5(closure_4(prototype), arg1, arg2);
  let closure_1 = tmpResult;
  let fn = tmpResult;
  if (2) {
    fn = tmpResult;
    if ("function" === typeof tmpResult) {
      fn = (arg0) => tmpResult.apply(arg2, arg0);
    }
  }
  return fn;
}
let closure_1 = importDefault(dependencyMap[0]);
let closure_2 = importDefault(dependencyMap[1]);
let closure_3 = importDefault(dependencyMap[2]);
let closure_4 = importDefault(dependencyMap[3]);
let closure_5 = importDefault(dependencyMap[4]);
let closure_6 = importDefault(dependencyMap[5]);

export default (arg0) => {
  class DecayAnimation {
    constructor(arg0) {
      self = this;
      tmp = closure_1(this, DecayAnimation);
      items = [];
      items[0] = arg0;
      obj = closure_4(DecayAnimation);
      tmp2 = closure_3;
      if (closure_7()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_4;
        constructResult = Reflect.construct(obj, items, closure_4(self).constructor);
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
  const global = DecayAnimation;
  callback2(DecayAnimation, arg0);
  let obj = {
    key: "__getNativeAnimationConfig",
    value: function __getNativeAnimationConfig() {
      return { type: "decay", deceleration: this._deceleration, velocity: this._velocity, iterations: this.__iterations, platformConfig: this._platformConfig, debugID: this.__getDebugID() };
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "start",
    value: function start(_lastValue, _onUpdate) {
      const DecayAnimation = this;
      const items = [_lastValue, _onUpdate, arg2, arg3, arg4];
      callback4(DecayAnimation, "start", this, 3)(items);
      this._lastValue = _lastValue;
      this._fromValue = _lastValue;
      this._onUpdate = _onUpdate;
      this._startTime = Date.now();
      if (!this.__startAnimationIfNative(arg4)) {
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
      callback4(DecayAnimation, "stop", this, 3)([]);
      if (null != this._animationFrame) {
        DecayAnimation.cancelAnimationFrame(self._animationFrame);
      }
      self.__notifyAnimationEnd({ finished: false });
    }
  };
  return callback(DecayAnimation, items);
}(importDefault(dependencyMap[6]));
