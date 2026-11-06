// Module ID: 1699
// Function ID: 1700
// Dependencies: [41, 42, 90, 91, 1700, 1701, 1703, 1705]
// Exports: createNativeReanimatedModule

// Module 1699
import _classPrivateFieldKeyDefault from "_classPrivateFieldKey" /* 91 */;
import jsVersion from "jsVersion" /* 1700 */;
import react_native from "react-native" /* 1701 */;
import _mod1703 from "module_1703" /* 1703 */;
import _mod1705 from "module_1705" /* 1705 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import _classPrivateFieldBase from "_classPrivateFieldBase" /* 90 */;

let closure_5 = _classPrivateFieldKeyDefault("reanimatedModuleProxy");
class NativeReanimatedModule {
  constructor() {
    _classCallCheck(this, NativeReanimatedModule);
    Object.defineProperty(this, closure_5, { writable: true, value: "a" });
    global._REANIMATED_VERSION_JS = jsVersion.jsVersion;
    if (react_native.ReanimatedTurboModule) {
      const _globalThis = globalThis;
      let flag = true;
      if (!globalThis.__reanimatedModuleProxy) {
        const _globalThis2 = globalThis;
        const tmp5Result = _mod1705;
        globalThis.__UI_WORKLET_RUNTIME_HOLDER = tmp5Result.getUIRuntimeHolder();
        const _globalThis3 = globalThis;
        const tmp5Result2 = _mod1705;
        globalThis.__UI_SCHEDULER_HOLDER = tmp5Result2.getUISchedulerHolder();
        const ReanimatedTurboModule = tmp5(1701).ReanimatedTurboModule;
        flag = ReanimatedTurboModule.installTurboModule();
        delete globalThis["__UI_WORKLET_RUNTIME_HOLDER"];
        delete globalThis["__UI_SCHEDULER_HOLDER"];
      }
      if (!flag) {
        const _Error = Error;
        const self = this;
        const self2 = this;
        const error = new Error("[Reanimated] Failed to install the native module because React Native has no active surface on its discarded instance. This happens when the app is reloaded while a previous reload is still in progress, for example during an OTA update immediately upon launch. No action is required; the app will continue to function as usual.");
        throw error;
      }
    }
    if (undefined === global.__reanimatedModuleProxy) {
      const _Error2 = Error;
      const self3 = this;
      const self4 = this;
      const error1 = new Error("[Reanimated] Native part of Reanimated doesn't seem to be initialized.\nSee https://docs.swmansion.com/react-native-reanimated/docs/guides/troubleshooting#native-part-of-reanimated-doesnt-seem-to-be-initialized for more details.");
      throw error1;
    } else {
      _classPrivateFieldBase(this, closure_5)[closure_5] = global.__reanimatedModuleProxy;
    }
  }
}
const entry = {
  key: "isSensorAvailable",
  value: function isSensorAvailable(arg0) {
    const obj = _classPrivateFieldBase(this, closure_5)[closure_5];
    return obj.isSensorAvailable(arg0);
  }
};
const items = [
  entry,
  {
    key: "registerSensor",
    value: function registerSensor(arg0, arg1, arg2, arg3) {
      const obj = _classPrivateFieldBase(this, closure_5)[closure_5];
      return obj.registerSensor(arg0, arg1, arg2, arg3);
    }
  },
  {
    key: "unregisterSensor",
    value: function unregisterSensor(arg0) {
      const obj = _classPrivateFieldBase(this, closure_5)[closure_5];
      return obj.unregisterSensor(arg0);
    }
  },
  {
    key: "registerEventHandler",
    value: function registerEventHandler(arg0, arg1, arg2) {
      const obj = _classPrivateFieldBase(this, closure_5)[closure_5];
      return obj.registerEventHandler(arg0, arg1, arg2);
    }
  },
  {
    key: "unregisterEventHandler",
    value: function unregisterEventHandler(arg0) {
      const obj = _classPrivateFieldBase(this, closure_5)[closure_5];
      return obj.unregisterEventHandler(arg0);
    }
  },
  {
    key: "getViewProp",
    value: function getViewProp(arg0, arg1, __internalInstanceHandle, arg3) {
      const obj = _mod1703;
      const shadowNodeWrapperFromRef = obj.getShadowNodeWrapperFromRef(__internalInstanceHandle);
      const obj2 = _classPrivateFieldBase(this, closure_5)[closure_5];
      return obj2.getViewProp(shadowNodeWrapperFromRef, arg1, arg3);
    }
  },
  {
    key: "configureLayoutAnimationBatch",
    value: function configureLayoutAnimationBatch(arg0) {
      const obj = _classPrivateFieldBase(this, closure_5)[closure_5];
      const result = obj.configureLayoutAnimationBatch(arg0);
    }
  },
  {
    key: "setShouldAnimateExitingForTag",
    value: function setShouldAnimateExitingForTag(arg0, arg1) {
      const obj = _classPrivateFieldBase(this, closure_5)[closure_5];
      const result = obj.setShouldAnimateExitingForTag(arg0, arg1);
    }
  },
  {
    key: "getStaticFeatureFlag",
    value: function getStaticFeatureFlag(arg0) {
      const obj = _classPrivateFieldBase(this, closure_5)[closure_5];
      return obj.getStaticFeatureFlag(arg0);
    }
  },
  {
    key: "setDynamicFeatureFlag",
    value: function setDynamicFeatureFlag(arg0, arg1) {
      const obj = _classPrivateFieldBase(this, closure_5)[closure_5];
      const result = obj.setDynamicFeatureFlag(arg0, arg1);
    }
  },
  {
    key: "subscribeForKeyboardEvents",
    value: function subscribeForKeyboardEvents(arg0, arg1, arg2) {
      const obj = _classPrivateFieldBase(this, closure_5)[closure_5];
      return obj.subscribeForKeyboardEvents(arg0, arg1, arg2);
    }
  },
  {
    key: "unsubscribeFromKeyboardEvents",
    value: function unsubscribeFromKeyboardEvents(arg0) {
      const obj = _classPrivateFieldBase(this, closure_5)[closure_5];
      const result = obj.unsubscribeFromKeyboardEvents(arg0);
    }
  },
  {
    key: "setViewStyle",
    value: function setViewStyle(arg0, arg1) {
      const obj = _classPrivateFieldBase(this, closure_5)[closure_5];
      obj.setViewStyle(arg0, arg1);
    }
  },
  {
    key: "setCSSEventHandler",
    value: function setCSSEventHandler(arg0) {
      const obj = _classPrivateFieldBase(this, closure_5)[closure_5];
      obj.setCSSEventHandler(arg0);
    }
  },
  {
    key: "markNodeAsRemovable",
    value: function markNodeAsRemovable(arg0) {
      const obj = _classPrivateFieldBase(this, closure_5)[closure_5];
      obj.markNodeAsRemovable(arg0);
    }
  },
  {
    key: "unmarkNodeAsRemovable",
    value: function unmarkNodeAsRemovable(arg0) {
      const obj = _classPrivateFieldBase(this, closure_5)[closure_5];
      const result = obj.unmarkNodeAsRemovable(arg0);
    }
  },
  {
    key: "registerCSSKeyframes",
    value: function registerCSSKeyframes(arg0, arg1, arg2) {
      const obj = _classPrivateFieldBase(this, closure_5)[closure_5];
      obj.registerCSSKeyframes(arg0, arg1, arg2);
    }
  },
  {
    key: "unregisterCSSKeyframes",
    value: function unregisterCSSKeyframes(arg0, arg1) {
      const obj = _classPrivateFieldBase(this, closure_5)[closure_5];
      const result = obj.unregisterCSSKeyframes(arg0, arg1);
    }
  },
  {
    key: "applyCSSAnimations",
    value: function applyCSSAnimations(arg0, arg1, arg2) {
      const obj = _classPrivateFieldBase(this, closure_5)[closure_5];
      obj.applyCSSAnimations(arg0, arg1, arg2);
    }
  },
  {
    key: "unregisterCSSAnimations",
    value: function unregisterCSSAnimations(arg0) {
      const obj = _classPrivateFieldBase(this, closure_5)[closure_5];
      const result = obj.unregisterCSSAnimations(arg0);
    }
  },
  {
    key: "runCSSTransition",
    value: function runCSSTransition(arg0, arg1, arg2) {
      const obj = _classPrivateFieldBase(this, closure_5)[closure_5];
      obj.runCSSTransition(arg0, arg1, arg2);
    }
  },
  {
    key: "unregisterCSSTransition",
    value: function unregisterCSSTransition(arg0) {
      const obj = _classPrivateFieldBase(this, closure_5)[closure_5];
      const result = obj.unregisterCSSTransition(arg0);
    }
  },
  {
    key: "getSettledUpdates",
    value: function getSettledUpdates(arg0) {
      const obj = _classPrivateFieldBase(this, closure_5)[closure_5];
      return obj.getSettledUpdates(arg0);
    }
  },
  {
    key: "registerPseudoStyles",
    value: function registerPseudoStyles(arg0, arg1) {
      const obj = _classPrivateFieldBase(this, closure_5)[closure_5];
      obj.registerPseudoStyles(arg0, arg1);
    }
  },
  {
    key: "unregisterPseudoStyles",
    value: function unregisterPseudoStyles(arg0) {
      const obj = _classPrivateFieldBase(this, closure_5)[closure_5];
      const result = obj.unregisterPseudoStyles(arg0);
    }
  }
];
let closure_6 = _createClass(NativeReanimatedModule, items);

export function createNativeReanimatedModule() {
  const tmp = new closure_6();
  return tmp;
}
