// Module ID: 370
// Function ID: 5498
// Name: _isNativeReflectConstruct
// Dependencies: [153, 6, 7, 15, 17, 102, 18, 44, 371, 372]

// Module 370 (_isNativeReflectConstruct)
import "_readOnlyError";
import _inherits from "_inherits";
import invariant from "invariant";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _get from "_get";
import closure_9 from "_inherits";

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
  const importDefault = tmpResult;
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
  class SpringAnimation {
    constructor(arg0) {
      self = this;
      tmp = outer1_4(this, SpringAnimation);
      items = [];
      items[0] = arg0;
      obj = outer1_7(SpringAnimation);
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
      overshootClamping = arg0.overshootClamping;
      tmp2Result._overshootClamping = null != overshootClamping && overshootClamping;
      restDisplacementThreshold = arg0.restDisplacementThreshold;
      num = 0.001;
      num2 = 0.001;
      if (null != restDisplacementThreshold) {
        num2 = restDisplacementThreshold;
      }
      tmp2Result._restDisplacementThreshold = num2;
      restSpeedThreshold = arg0.restSpeedThreshold;
      if (null != restSpeedThreshold) {
        num = restSpeedThreshold;
      }
      tmp2Result._restSpeedThreshold = num;
      velocity = arg0.velocity;
      num3 = 0;
      if (null != velocity) {
        num3 = velocity;
      }
      tmp2Result._initialVelocity = num3;
      velocity2 = arg0.velocity;
      num4 = 0;
      if (null != velocity2) {
        num4 = velocity2;
      }
      tmp2Result._lastVelocity = num4;
      ({ toValue: tmp6._toValue, delay } = arg0);
      num5 = 0;
      if (null != delay) {
        num5 = delay;
      }
      tmp2Result._delay = num5;
      tmp2Result._platformConfig = arg0.platformConfig;
      if (undefined === arg0.stiffness) {
        if (undefined === arg0.damping) {
          if (undefined === arg0.mass) {
            if (undefined === arg0.bounciness) {
              if (undefined === arg0.speed) {
                tmp7 = outer1_2;
                tmp8 = outer1_3;
                num6 = 8;
                obj2 = outer1_2(outer1_3[8]);
                tension = arg0.tension;
                num7 = 40;
                if (null != tension) {
                  num7 = tension;
                }
                friction = arg0.friction;
                num8 = 7;
                if (null != friction) {
                  num8 = friction;
                }
                result = obj2.fromOrigamiTensionAndFriction(num7, num8);
                ({ stiffness: tmp6._stiffness, damping: tmp6._damping } = result);
                num9 = 1;
                tmp2Result._mass = 1;
              }
            }
            tmp10 = outer1_1;
            tmp11 = outer1_3;
            num10 = 7;
            tmp13 = undefined === arg0.tension;
            tmp12 = outer1_1(outer1_3[7]);
            if (tmp13) {
              tmp13 = undefined === arg0.friction;
            }
            if (tmp13) {
              tmp13 = undefined === arg0.stiffness;
            }
            if (tmp13) {
              tmp13 = undefined === arg0.damping;
            }
            if (tmp13) {
              tmp13 = undefined === arg0.mass;
            }
            str = "You can define one of bounciness/speed, tension/friction, or stiffness/damping/mass, but not more than one";
            tmp12Result = tmp12(tmp13, "You can define one of bounciness/speed, tension/friction, or stiffness/damping/mass, but not more than one");
            tmp15 = outer1_2;
            tmp16 = outer1_3;
            num11 = 8;
            obj3 = outer1_2(outer1_3[8]);
            bounciness = arg0.bounciness;
            if (null != bounciness) {
              num11 = bounciness;
            }
            speed = arg0.speed;
            num12 = 12;
            if (null != speed) {
              num12 = speed;
            }
            result1 = obj3.fromBouncinessAndSpeed(num11, num12);
            ({ stiffness: tmp6._stiffness, damping: tmp6._damping } = result1);
            num13 = 1;
            tmp2Result._mass = 1;
          }
          tmp21 = outer1_1;
          tmp22 = outer1_3;
          num17 = 7;
          str2 = "Stiffness value must be greater than 0";
          tmp23 = outer1_1(outer1_3[7])(tmp2Result._stiffness > 0, "Stiffness value must be greater than 0");
          str3 = "Damping value must be greater than 0";
          tmp24 = outer1_1(outer1_3[7])(tmp2Result._damping > 0, "Damping value must be greater than 0");
          str4 = "Mass value must be greater than 0";
          tmp25 = outer1_1(outer1_3[7])(tmp2Result._mass > 0, "Mass value must be greater than 0");
          return tmp2Result;
        }
      }
      tmp19 = undefined === arg0.bounciness;
      tmp18 = outer1_1(outer1_3[7]);
      if (tmp19) {
        tmp19 = undefined === arg0.speed;
      }
      if (tmp19) {
        tmp19 = undefined === arg0.tension;
      }
      if (tmp19) {
        tmp19 = undefined === arg0.friction;
      }
      tmp18Result = tmp18(tmp19, "You can define one of bounciness/speed, tension/friction, or stiffness/damping/mass, but not more than one");
      stiffness = arg0.stiffness;
      num14 = 100;
      if (null != stiffness) {
        num14 = stiffness;
      }
      tmp2Result._stiffness = num14;
      damping = arg0.damping;
      num15 = 10;
      if (null != damping) {
        num15 = damping;
      }
      tmp2Result._damping = num15;
      mass = arg0.mass;
      num16 = 1;
      if (null != mass) {
        num16 = mass;
      }
      tmp2Result._mass = num16;
      return;
    }
  }
  callback2(SpringAnimation, arg0);
  let obj = {
    key: "__getNativeAnimationConfig",
    value: function __getNativeAnimationConfig() {
      const self = this;
      const obj = { type: "spring", overshootClamping: this._overshootClamping, restDisplacementThreshold: this._restDisplacementThreshold, restSpeedThreshold: this._restSpeedThreshold, stiffness: this._stiffness, damping: this._damping, mass: this._mass };
      let _lastVelocity = this._initialVelocity;
      if (null == _lastVelocity) {
        _lastVelocity = self._lastVelocity;
      }
      obj.initialVelocity = _lastVelocity;
      ({ _toValue: obj.toValue, __iterations: obj.iterations, _platformConfig: obj.platformConfig } = self);
      obj.debugID = self.__getDebugID();
      return obj;
    }
  };
  let items = [obj, , , , ];
  obj = {
    key: "start",
    value: function start(_startPosition, _onUpdate, arg2, getInternalState) {
      let self = this;
      let closure_0 = arg4;
      self = this;
      const items = [_startPosition, _onUpdate, arg2, getInternalState, arg4];
      outer1_11(closure_0, "start", this, 3)(items);
      this._startPosition = _startPosition;
      this._lastPosition = this._startPosition;
      this._onUpdate = _onUpdate;
      this._lastTime = Date.now();
      this._frameTime = 0;
      if (getInternalState instanceof closure_0) {
        const internalState = getInternalState.getInternalState();
        ({ lastPosition: self._lastPosition, lastVelocity: self._lastVelocity } = internalState);
        self._initialVelocity = self._lastVelocity;
        self._lastTime = internalState.lastTime;
      }
      function start() {
        if (!self.__startAnimationIfNative(closure_0)) {
          self.onUpdate();
        }
      }
      if (self._delay) {
        const _setTimeout = setTimeout;
        self._timeout = setTimeout(start, self._delay);
      } else {
        start();
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "getInternalState",
    value: function getInternalState() {
      return { lastPosition: this._lastPosition, lastVelocity: this._lastVelocity, lastTime: this._lastTime };
    }
  };
  items[2] = obj;
  items[3] = {
    key: "onUpdate",
    value: function onUpdate() {
      let _mass;
      let _stiffness;
      const self = this;
      let timestamp = Date.now();
      if (timestamp > this._lastTime + 64) {
        timestamp = self._lastTime + 64;
      }
      self._frameTime = self._frameTime + (timestamp - self._lastTime) / 1000;
      ({ _mass, _stiffness } = self);
      const result = self._damping / (2 * Math.sqrt(_stiffness * _mass));
      const sqrtResult = Math.sqrt(_stiffness / _mass);
      const result1 = sqrtResult * Math.sqrt(1 - result * result);
      const diff = self._toValue - self._startPosition;
      const _frameTime = self._frameTime;
      if (result < 1) {
        const _Math2 = Math;
        const expResult = Math.exp(-result * sqrtResult * _frameTime);
        const _Math3 = Math;
        const result2 = (tmp2 + result * sqrtResult * diff) / result1;
        const _Math4 = Math;
        const result3 = result2 * Math.sin(result1 * _frameTime);
        let diff1 = self._toValue - expResult * (result3 + diff * Math.cos(result1 * _frameTime));
        const _Math5 = Math;
        const result4 = result * sqrtResult * expResult;
        const _Math6 = Math;
        const result5 = Math.sin(result1 * _frameTime) * (tmp2 + result * sqrtResult * diff) / result1;
        const _Math7 = Math;
        const sum = result5 + diff * Math.cos(result1 * _frameTime);
        const _Math8 = Math;
        const result6 = Math.cos(result1 * _frameTime) * (tmp2 + result * sqrtResult * diff);
        const result7 = result1 * diff;
        let diff2 = result4 * sum - expResult * (result6 - result7 * Math.sin(result1 * _frameTime));
      } else {
        const _Math = Math;
        const expResult1 = Math.exp(-sqrtResult * _frameTime);
        diff1 = self._toValue - expResult1 * (diff + (tmp2 + sqrtResult * diff) * _frameTime);
        diff2 = expResult1 * (tmp2 * (_frameTime * sqrtResult - 1) + _frameTime * diff * (sqrtResult * sqrtResult));
      }
      self._lastTime = timestamp;
      self._lastPosition = diff1;
      self._lastVelocity = diff2;
      self._onUpdate(diff1);
      if (self.__active) {
        let _overshootClamping = self._overshootClamping;
        if (_overshootClamping) {
          _overshootClamping = 0 !== self._stiffness;
        }
        if (!_overshootClamping) {
          const _Math9 = Math;
          let flag3 = true;
          if (0 !== self._stiffness) {
            const _Math10 = Math;
            flag3 = Math.abs(self._toValue - diff1) <= self._restDisplacementThreshold;
          }
          {
            const _requestAnimationFrame = requestAnimationFrame;
            const onUpdate = self.onUpdate;
            self._animationFrame = requestAnimationFrame(onUpdate.bind(self));
          }
          if (0 !== self._stiffness) {
            self._lastPosition = self._toValue;
            self._lastVelocity = 0;
            self._onUpdate(self._toValue);
          }
          const obj = { finished: true };
          self.__notifyAnimationEnd(obj);
        } else if (self._startPosition < self._toValue) {
          let tmp19 = diff1 > self._toValue;
        } else {
          tmp19 = diff1 < self._toValue;
        }
      }
    }
  };
  items[4] = {
    key: "stop",
    value: function stop() {
      const self = this;
      outer1_11(SpringAnimation, "stop", this, 3)([]);
      clearTimeout(this._timeout);
      if (null != this._animationFrame) {
        SpringAnimation.cancelAnimationFrame(self._animationFrame);
      }
      self.__notifyAnimationEnd({ finished: false });
    }
  };
  return callback(SpringAnimation, items);
})(require("Animation"));
