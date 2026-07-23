// Module ID: 377
// Function ID: 5620
// Name: attachNativeEventImpl
// Dependencies: [6, 7, 347, 367, 44, 117, 348]

// Module 377 (attachNativeEventImpl)
import set from "set";
import _defineProperties from "_defineProperties";

const require = arg1;
function attachNativeEventImpl(arg0, arg1, arg2, arg3) {
  const _require = arg1;
  const importDefault = arg3;
  const items = [];
  function traverse(nativeEvent, nativeEventPath) {
    if (nativeEvent instanceof callback(items[2])) {
      nativeEvent.__makeNative(callback);
      const obj = { nativeEventPath, animatedValueTag: nativeEvent.__getNativeTag() };
      items.push(obj);
    } else if (nativeEvent instanceof callback(items[3])) {
      traverse(nativeEvent.x, nativeEventPath.concat("x"));
      traverse(nativeEvent.y, nativeEventPath.concat("y"));
    } else if ("object" === typeof nativeEvent) {
      for (const key10017 in arg0) {
        let tmp11 = key10017;
        let tmp12 = traverse;
        let tmp13 = traverse(arg0[key10017], arg1.concat(key10017));
        continue;
      }
    }
  }
  let nativeEvent = arg2[0];
  if (nativeEvent) {
    nativeEvent = arg2[0].nativeEvent;
  }
  importDefault(items[4])(nativeEvent, "Native driven events only support animated values contained inside `nativeEvent`.");
  traverse(arg2[0].nativeEvent, []);
  let obj = _require(items[5]);
  const findNodeHandleResult = obj.findNodeHandle(arg0);
  if (null != findNodeHandleResult) {
    let item = items.forEach((arg0) => {
      const API = callback(items[6]).API;
      const result = API.addAnimatedEventToView(_defineProperties, closure_0, arg0);
    });
  }
  obj = {
    detach() {
      if (null != _defineProperties) {
        const item = items.forEach((animatedValueTag) => {
          const API = callback(items[6]).API;
          const result = API.removeAnimatedEventFromView(outer1_4, outer1_0, animatedValueTag.animatedValueTag);
        });
      }
    }
  };
  return obj;
}

export { attachNativeEventImpl };
export const AnimatedEvent = (() => {
  class AnimatedEvent {
    constructor(arg0, arg1) {
      tmp = arg1;
      self = this;
      self = this;
      tmp2 = outer1_3(this, self);
      this._listeners = [];
      this._callListeners = () => {
        const length = arguments.length;
        const array = new Array(length);
        for (let num = 0; num < length; num = num + 1) {
          array[num] = arguments[num];
        }
        const _listeners = array._listeners;
        const item = _listeners.forEach((apply) => apply.apply(undefined, array));
      };
      this._argMapping = arg0;
      if (null == arg1) {
        tmp3 = globalThis;
        _console = console;
        str = "Animated.event now requires a second argument for options";
        warnResult = console.warn("Animated.event now requires a second argument for options");
        obj = {};
        flag = false;
        obj.useNativeDriver = false;
        tmp = obj;
      }
      if (tmp.listener) {
        __addListenerResult = self.__addListener(tmp.listener);
      }
      self._attachedEvent = null;
      obj2 = outer1_1(outer1_2[6]);
      self.__isNative = obj2.shouldUseNativeDriver(tmp);
      self.__platformConfig = tmp.platformConfig;
      return;
    }
  }
  let obj = {
    key: "__addListener",
    value: function __addListener(listener) {
      const _listeners = this._listeners;
      _listeners.push(listener);
    }
  };
  const items = [obj, , , , ];
  obj = {
    key: "__removeListener",
    value: function __removeListener(arg0) {
      let closure_0 = arg0;
      const _listeners = this._listeners;
      this._listeners = _listeners.filter((arg0) => arg0 !== closure_0);
    }
  };
  items[1] = obj;
  obj = {
    key: "__attach",
    value: function __attach(arg0, arg1) {
      outer1_1(outer1_2[4])(this.__isNative, "Only native driven events need to be attached.");
      this._attachedEvent = outer1_5(arg0, arg1, this._argMapping, this.__platformConfig);
    }
  };
  items[2] = obj;
  items[3] = {
    key: "__detach",
    value: function __detach(arg0, arg1) {
      outer1_1(outer1_2[4])(this.__isNative, "Only native driven events need to be detached.");
      if (this._attachedEvent) {
        const _attachedEvent = this._attachedEvent;
        _attachedEvent.detach();
      }
    }
  };
  items[4] = {
    key: "__getHandler",
    value: function __getHandler() {
      const self = this;
      return this.__isNative ? this._callListeners : (() => {
        const length = arguments.length;
        const array = new Array(length);
        for (let num = 0; num < length; num = num + 1) {
          array[num] = arguments[num];
        }
        function traverse(setValue, arg1) {
          if (setValue instanceof outer3_1(outer3_2[2])) {
            if ("number" === typeof arg1) {
              setValue.setValue(arg1);
            }
          } else if (setValue instanceof outer3_1(outer3_2[3])) {
            if ("object" === typeof arg1) {
              traverse(setValue.x, arg1.x);
              traverse(setValue.y, arg1.y);
            }
          } else if ("object" === typeof setValue) {
            for (const key10017 in arg0) {
              let tmp9 = key10017;
              let tmp10 = traverse;
              let tmp11 = traverse(arg0[key10017], arg1[key10017]);
              continue;
            }
          }
        }
        const _argMapping = array._argMapping;
        const item = _argMapping.forEach((arg0, arg1) => {
          traverse(arg0, array[arg1]);
        });
        const _callListeners = array._callListeners;
        _callListeners.apply(array, array);
      });
    }
  };
  return callback(AnimatedEvent, items);
})();
