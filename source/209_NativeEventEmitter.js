// Module ID: 209
// Function ID: 2941
// Name: NativeEventEmitter
// Dependencies: [6, 7, 101, 44]

// Module 209 (NativeEventEmitter)
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";


export default (() => {
  class NativeEventEmitter {
    constructor(arg0) {
      tmp = outer1_2(this, NativeEventEmitter);
      tmp2 = !arg0;
      tmp3 = !tmp2;
      if (!tmp2) {
        str = "function";
        tmp3 = "function" === typeof arg0.addListener;
      }
      tmp4 = !arg0;
      tmp5 = !tmp4;
      if (!tmp4) {
        str2 = "function";
        tmp5 = "function" === typeof arg0.removeListeners;
      }
      if (arg0) {
        if (tmp3) {
          if (tmp5) {
            this._nativeModule = arg0;
          }
          return;
        }
      }
      if (null != arg0) {
        if (!tmp3) {
          tmp6 = globalThis;
          _console = console;
          str3 = "`new NativeEventEmitter()` was called with a non-null argument without the required `addListener` method.";
          warnResult = console.warn("`new NativeEventEmitter()` was called with a non-null argument without the required `addListener` method.");
        }
        if (!tmp5) {
          tmp8 = globalThis;
          _console2 = console;
          str4 = "`new NativeEventEmitter()` was called with a non-null argument without the required `removeListeners` method.";
          warnResult1 = console.warn("`new NativeEventEmitter()` was called with a non-null argument without the required `removeListeners` method.");
        }
      }
      return;
    }
  }
  let obj = {
    key: "addListener",
    value: function addListener(arg0, arg1, arg2) {
      const self = this;
      let _nativeModule = this._nativeModule;
      if (null != _nativeModule) {
        _nativeModule.addListener(arg0);
      }
      let obj = NativeEventEmitter(outer1_1[2]);
      let closure_1 = obj.addListener(arg0, arg1, arg2);
      obj = {
        remove() {
          if (null != c1) {
            const _nativeModule = self._nativeModule;
            if (null != _nativeModule) {
              _nativeModule.removeListeners(1);
            }
            c1.remove();
            c1 = null;
          }
        }
      };
      return obj;
    }
  };
  let items = [obj, , , ];
  obj = {
    key: "emit",
    value: function emit(arg0) {
      const length = arguments.length;
      let num = 0;
      if (length > 1) {
        num = length - 1;
      }
      const array = new Array(num);
      for (let num2 = 1; num2 < length; num2 = num2 + 1) {
        array[num2 - 1] = arguments[num2];
      }
      const emit = NativeEventEmitter(outer1_1[2]).emit;
      const items = [arg0];
      emit.apply(NativeEventEmitter(outer1_1[2]), items.concat(array));
    }
  };
  items[1] = obj;
  obj = {
    key: "removeAllListeners",
    value: function removeAllListeners(arg0) {
      const self = this;
      NativeEventEmitter(outer1_1[3])(null != arg0, "`NativeEventEmitter.removeAllListener()` requires a non-null argument.");
      const _nativeModule = this._nativeModule;
      if (null != _nativeModule) {
        _nativeModule.removeListeners(self.listenerCount(arg0));
      }
      NativeEventEmitter(outer1_1[2]).removeAllListeners(arg0);
    }
  };
  items[2] = obj;
  items[3] = {
    key: "listenerCount",
    value: function listenerCount(arg0) {
      return NativeEventEmitter(outer1_1[2]).listenerCount(arg0);
    }
  };
  return callback(NativeEventEmitter, items);
})();
