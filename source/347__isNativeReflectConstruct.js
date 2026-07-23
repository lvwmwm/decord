// Module ID: 347
// Function ID: 5139
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 102, 18, 99, 100, 348, 354, 359, 357]

// Module 347 (_isNativeReflectConstruct)
import _classPrivateFieldBase from "_classPrivateFieldBase";
import _classPrivateFieldKey from "_classPrivateFieldKey";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _get from "_get";
import _inherits from "_inherits";
import closure_8 from "_classPrivateFieldBase";
import importDefaultResult from "_classPrivateFieldKey";

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
  const dependencyMap = tmpResult;
  let fn = tmpResult;
  if (2) {
    fn = tmpResult;
    if ("function" === typeof tmpResult) {
      fn = (arg0) => tmpResult.apply(closure_0, arg0);
    }
  }
  return fn;
}
function flushValue(self) {
  const set = new Set();
  function findAnimatedStyles(update) {
    if ("function" === typeof update.update) {
      set.add(update);
    } else {
      const item = update.__getChildren().forEach(findAnimatedStyles);
      const __getChildrenResult = update.__getChildren();
    }
  }
  findAnimatedStyles(self);
  let item = set.forEach((update) => update.update());
}
function _executeAsAnimatedBatch(combined) {
  const API = importDefault(348).API;
  const result = API.setWaitingForIdentifier(combined);
  arg1();
  const API2 = importDefault(348).API;
  const result1 = API2.unsetWaitingForIdentifier(combined);
}
function _ensureUpdateSubscriptionExists2() {
  let self = this;
  self = this;
  if (null == callback3(this, closure_10)[closure_10]) {
    const __getNativeTagResult = self.__getNativeTag();
    const dependencyMap = __getNativeTagResult;
    let API = self(348).API;
    let result = API.startListeningToAnimatedNodeValue(__getNativeTagResult);
    const nativeEventEmitter = self(348).nativeEventEmitter;
    let _classPrivateFieldBase = nativeEventEmitter.addListener("onAnimatedValueUpdate", (tag) => {
      if (tag.tag === closure_1) {
        const result = self.__onAnimatedValueUpdateReceived(tag.value, tag.offset);
      }
    });
    const obj = {
      remove() {
          if (null != outer1_8(self, outer1_10)[outer1_10]) {
            outer1_8(self, outer1_10)[outer1_10] = null;
            _classPrivateFieldBase.remove();
            const API = self(__getNativeTagResult[8]).API;
            const result = API.stopListeningToAnimatedNodeValue(closure_1);
          }
        }
    };
    callback3(self, closure_10)[closure_10] = obj;
  }
}
let closure_9 = importDefaultResult("listenerCount");
let closure_10 = importDefaultResult("updateSubscription");
let closure_11 = importDefaultResult("ensureUpdateSubscriptionExists");

export default ((arg0) => {
  class AnimatedValue {
    constructor(arg0, arg1) {
      self = this;
      tmp = outer1_2(this, AnimatedValue);
      items = [];
      items[0] = arg1;
      obj = outer1_5(AnimatedValue);
      tmp2 = outer1_4;
      if (outer1_12()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = outer1_5;
        constructResult = Reflect.construct(obj, items, outer1_5(self).constructor);
      } else {
        constructResult = obj.apply(self, items);
      }
      tmp2Result = tmp2(self, constructResult);
      obj = { value: outer1_16 };
      definePropertyResult = Object.defineProperty(tmp2Result, outer1_11, obj);
      definePropertyResult1 = Object.defineProperty(tmp2Result, outer1_9, { writable: true, value: undefined });
      definePropertyResult2 = Object.defineProperty(tmp2Result, outer1_10, { writable: true, value: undefined });
      if ("number" !== typeof arg0) {
        _Error = Error;
        prototype = Error.prototype;
        tmp16 = new.target;
        str = "AnimatedValue: Attempting to set value to undefined";
        tmp17 = new.target;
        error = new Error("AnimatedValue: Attempting to set value to undefined");
        tmp19 = error;
        throw error;
      } else {
        tmp9 = outer1_8;
        tmp10 = outer1_9;
        num = 0;
        outer1_8(tmp2Result, outer1_9)[outer1_9] = 0;
        tmp11 = outer1_8;
        tmp12 = outer1_10;
        tmp13 = outer1_10;
        tmp14 = null;
        outer1_8(tmp2Result, outer1_10)[outer1_10] = null;
        tmp2Result._value = arg0;
        tmp2Result._startingValue = arg0;
        tmp2Result._offset = 0;
        tmp2Result._animation = null;
        useNativeDriver = arg1;
        if (arg1) {
          useNativeDriver = arg1.useNativeDriver;
        }
        if (useNativeDriver) {
          __makeNativeResult = tmp2Result.__makeNative();
        }
        return tmp2Result;
      }
    }
  }
  callback2(AnimatedValue, arg0);
  let obj = {
    key: "__detach",
    value: function __detach() {
      let self = this;
      self = this;
      if (this.__isNative) {
        const API = AnimatedValue(outer1_1[8]).API;
        const value = API.getValue(self.__getNativeTag(), (arg0) => {
          self._value = arg0 - self._offset;
        });
      }
      self.stopAnimation();
      outer1_13(self, "__detach", self, 3)([]);
    }
  };
  let items = [obj, , , , , , , , , , , , , , , , , , ];
  obj = {
    key: "__getValue",
    value: function __getValue() {
      return this._value + this._offset;
    }
  };
  items[1] = obj;
  obj = {
    key: "__makeNative",
    value: function __makeNative(arg0) {
      const items = [arg0];
      outer1_13(AnimatedValue, "__makeNative", this, 3)(items);
      if (outer1_8(this, outer1_9)[outer1_9] > 0) {
        outer1_8(this, outer1_11)[outer1_11]();
        const tmp4 = outer1_8(this, outer1_11);
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: "addListener",
    value: function addListener(arg0) {
      const items = [arg0];
      const tmp2 = outer1_8(this, outer1_9);
      tmp2[outer1_9] = tmp2[outer1_9] + 1;
      if (this.__isNative) {
        outer1_8(this, outer1_11)[outer1_11]();
        const tmp5 = outer1_8(this, outer1_11);
      }
      return outer1_13(AnimatedValue, "addListener", this, 3)(items);
    }
  };
  items[4] = {
    key: "removeListener",
    value: function removeListener(arg0) {
      const self = this;
      const items = [arg0];
      outer1_13(AnimatedValue, "removeListener", this, 3)(items);
      const tmp2 = outer1_8(this, outer1_9);
      tmp2[outer1_9] = tmp2[outer1_9] - 1;
      let __isNative = this.__isNative;
      if (__isNative) {
        __isNative = 0 === outer1_8(self, outer1_9)[outer1_9];
      }
      if (__isNative) {
        const obj = outer1_8(self, outer1_10)[outer1_10];
        if (null != obj) {
          obj.remove();
        }
      }
    }
  };
  items[5] = {
    key: "removeAllListeners",
    value: function removeAllListeners() {
      outer1_13(AnimatedValue, "removeAllListeners", this, 3)([]);
      outer1_8(this, outer1_9)[outer1_9] = 0;
      if (this.__isNative) {
        const obj = outer1_8(this, outer1_10)[outer1_10];
        if (null != obj) {
          obj.remove();
        }
      }
    }
  };
  items[6] = {
    key: "setValue",
    value: function setValue(_value) {
      let self = this;
      let closure_0 = _value;
      self = this;
      if (this._animation) {
        const _animation = self._animation;
        _animation.stop();
        self._animation = null;
      }
      self._updateValue(_value, !self.__isNative);
      if (self.__isNative) {
        outer1_15(self.__getNativeTag().toString(), () => {
          const API = AnimatedValue(outer2_1[8]).API;
          return API.setAnimatedNodeValue(self.__getNativeTag(), closure_0);
        });
        const str = self.__getNativeTag();
      }
    }
  };
  items[7] = {
    key: "setOffset",
    value: function setOffset(_offset) {
      const self = this;
      this._offset = _offset;
      if (this.__isNative) {
        const API = AnimatedValue(outer1_1[8]).API;
        const result = API.setAnimatedNodeOffset(self.__getNativeTag(), _offset);
      }
    }
  };
  items[8] = {
    key: "flattenOffset",
    value: function flattenOffset() {
      const self = this;
      this._value = this._value + this._offset;
      this._offset = 0;
      if (this.__isNative) {
        const API = AnimatedValue(outer1_1[8]).API;
        const result = API.flattenAnimatedNodeOffset(self.__getNativeTag());
      }
    }
  };
  items[9] = {
    key: "extractOffset",
    value: function extractOffset() {
      let self = this;
      self = this;
      this._offset = this._offset + this._value;
      this._value = 0;
      if (this.__isNative) {
        outer1_15(self.__getNativeTag().toString(), () => {
          const API = AnimatedValue(outer2_1[8]).API;
          return API.extractAnimatedNodeOffset(self.__getNativeTag());
        });
        const str = self.__getNativeTag();
      }
    }
  };
  items[10] = {
    key: "stopAnimation",
    value: function stopAnimation(arg0) {
      const self = this;
      this.stopTracking();
      if (this._animation) {
        const _animation = self._animation;
        _animation.stop();
      }
      self._animation = null;
      if (arg0) {
        if (self.__isNative) {
          const API = AnimatedValue(outer1_1[8]).API;
          const value = API.getValue(self.__getNativeTag(), arg0);
        } else {
          arg0(self.__getValue());
        }
      }
    }
  };
  items[11] = {
    key: "resetAnimation",
    value: function resetAnimation(arg0) {
      const self = this;
      this.stopAnimation(arg0);
      this._value = this._startingValue;
      if (this.__isNative) {
        const API = AnimatedValue(outer1_1[8]).API;
        API.setAnimatedNodeValue(self.__getNativeTag(), self._startingValue);
      }
    }
  };
  items[12] = {
    key: "__onAnimatedValueUpdateReceived",
    value: function __onAnimatedValueUpdateReceived(_value, _offset) {
      this._updateValue(_value, false);
      if (null != _offset) {
        this._offset = _offset;
      }
    }
  };
  items[13] = {
    key: "interpolate",
    value: function interpolate(arg0) {
      let tmp = AnimatedValue(outer1_1[9]);
      tmp = new tmp(this, arg0);
      return tmp;
    }
  };
  items[14] = {
    key: "animate",
    value: function animate(__isInteraction) {
      let self = this;
      let closure_0 = arg1;
      self = this;
      let _classPrivateFieldBase = null;
      if (__isInteraction.__isInteraction) {
        _classPrivateFieldBase = AnimatedValue(outer1_1[10]).createInteractionHandle();
        let obj = AnimatedValue(outer1_1[10]);
      }
      if (self._animation) {
        const _animation = self._animation;
        _animation.stop();
      }
      self._animation = __isInteraction;
      __isInteraction.start(self._value, (_value) => {
        self._updateValue(_value, true);
      }, (arg0) => {
        self._animation = null;
        if (null !== _classPrivateFieldBase) {
          const result = AnimatedValue(outer2_1[10]).clearInteractionHandle(_classPrivateFieldBase);
          const obj = AnimatedValue(outer2_1[10]);
        }
        if (callback) {
          callback(arg0);
        }
      }, self._animation, self);
    }
  };
  items[15] = {
    key: "stopTracking",
    value: function stopTracking(closure_1, arg1) {
      const self = this;
      if (this._tracking) {
        const _tracking = self._tracking;
        _tracking.__detach();
      }
      self._tracking = null;
    }
  };
  items[16] = {
    key: "track",
    value: function track(_tracking) {
      this.stopTracking();
      this._tracking = _tracking;
      if (this._tracking) {
        _tracking = this._tracking;
        _tracking.update();
      }
    }
  };
  items[17] = {
    key: "_updateValue",
    value: function _updateValue(_value, arg1) {
      const self = this;
      if (undefined === _value) {
        const _Error = Error;
        const error = new Error("AnimatedValue: Attempting to set value to undefined");
        throw error;
      } else {
        self._value = _value;
        if (arg1) {
          outer1_14(self);
        }
        self.__callListeners(self.__getValue());
      }
    }
  };
  items[18] = {
    key: "__getNativeConfig",
    value: function __getNativeConfig() {
      return { type: "value", value: this._value, offset: this._offset, debugID: this.__getDebugID() };
    }
  };
  return callback(AnimatedValue, items);
})(require("_isNativeReflectConstruct"));
export { flushValue };
