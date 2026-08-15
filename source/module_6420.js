// Module ID: 6420
// Function ID: 6421
// Dependencies: [1654, 4114, 6409, 6421, 6382]

// Module 6420
try {
  const _module = require("cancelAnimation");
  try {
    const _module1 = require("module_4114");
    if (_module1 != null) {
      const fn = function t() {

      };
      fn.__closure = {};
      fn.__workletHash = 1792171573139;
      fn.__initData = { code: "function pnpm_reanimatedWrapperTs1(){}" };
      _module1.scheduleOnUI(fn);
    }
    const _module2 = require("module_6409");
    _module2.ghQueueMicrotask(() => {
      const NativeProxy = require(6421) /* n */.NativeProxy;
      if (!NativeProxy.installUIRuntimeBindings()) {
        const _console = console;
        console.warn(require(6382) /* tagMessage */.tagMessage("Failed to install UI runtime bindings. Please report this at https://github.com/software-mansion/react-native-gesture-handler/issues."));
        const tmpResult = require(6382) /* tagMessage */;
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
        console.warn(require(6382) /* tagMessage */.tagMessage("Please use newer version of react-native-reanimated in order to control state of the gestures."));
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
