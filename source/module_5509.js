// Module ID: 5509
// Function ID: 5510
// Dependencies: [1653, 4082, 5498, 5510, 5471]

// Module 5509
try {
  const _module = require("cancelAnimation");
  try {
    const _module1 = require("module_4082");
    if (_module1 != null) {
      const fn = function t() {

      };
      fn.__closure = {};
      fn.__workletHash = 1792171573139;
      fn.__initData = { code: "function pnpm_reanimatedWrapperTs1(){}" };
      _module1.scheduleOnUI(fn);
    }
    const _module2 = require("module_5498");
    _module2.ghQueueMicrotask(() => {
      const NativeProxy = require(5510) /* n */.NativeProxy;
      if (!NativeProxy.installUIRuntimeBindings()) {
        const _console = console;
        console.warn(require(5471) /* tagMessage */.tagMessage("Failed to install UI runtime bindings. Please report this at https://github.com/software-mansion/react-native-gesture-handler/issues."));
        const tmpResult = require(5471) /* tagMessage */;
      }
    });
    let useSharedValue;
    if (_module != null) {
      useSharedValue = _module.useSharedValue;
    }
    let setGestureState = undefined === _module;
    if (!setGestureState) {
      setGestureState = _module.setGestureState;
    }
    if (!setGestureState) {
      const fn2 = function o() {
        console.warn(require(5471) /* tagMessage */.tagMessage("Please use newer version of react-native-reanimated in order to control state of the gestures."));
      };
      let obj = { tagMessage: null };
      obj = { code: "function pnpm_reanimatedWrapperTs2(){const{tagMessage}=this.__closure;console.warn(tagMessage('Please use newer version of react-native-reanimated in order to control state of the gestures.'));}" };
      obj[0] = require("tagMessage").tagMessage;
      fn2.__closure = obj;
      fn2.__workletHash = 3596069664305;
      fn2.__initData = obj;
      _module.setGestureState = fn2;
    }
    exports.Reanimated = _module;
  } catch (err) {
  }
} catch (err) {
}
