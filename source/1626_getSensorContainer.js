// Module ID: 1626
// Function ID: 18177
// Name: getSensorContainer
// Dependencies: []
// Exports: configureLayoutAnimationBatch, enableLayoutAnimations, getViewProp, initializeSensor, isConfigured, isReanimated3, jsiConfigureProps, markNodeAsRemovable, registerEventHandler, registerSensor, setShouldAnimateExitingForTag, subscribeForKeyboardEvents, unmarkNodeAsRemovable, unregisterEventHandler, unregisterSensor, unsubscribeFromKeyboardEvents

// Module 1626 (getSensorContainer)
function getSensorContainer() {
  if (!global.__sensorContainer) {
    const SensorContainer = require(dependencyMap[4]).SensorContainer;
    const prototype = SensorContainer.prototype;
    const sensorContainer = new SensorContainer();
    global.__sensorContainer = sensorContainer;
  }
  return global.__sensorContainer;
}
const _module = require(dependencyMap[0]);
let closure_3 = _module.isEdgeToEdge();
const _module1 = require(dependencyMap[1]);
let closure_4 = _module1.shouldBeUseWeb();
function isReanimated3() {
  return true;
}
let closure_5 = { code: "function handleAndFlushAnimationFrame_Pnpm_coreTs1(eventTimestamp,event){const{eventHandler}=this.__closure;global.__frameTimestamp=eventTimestamp;eventHandler(event);global.__flushAnimationFrame(eventTimestamp);global.__frameTimestamp=undefined;}" };
let closure_6 = { code: "function handleAndFlushAnimationFrame_Pnpm_coreTs2(state,height){const{eventHandler}=this.__closure;const now=global._getAnimationTimestamp();global.__frameTimestamp=now;eventHandler(state,height);global.__flushAnimationFrame(now);global.__frameTimestamp=undefined;}" };
let closure_7 = {};

export const startMapper = require(dependencyMap[6]).startMapper;
export const stopMapper = require(dependencyMap[6]).stopMapper;
export const makeMutable = require(dependencyMap[7]).makeMutable;
export const createWorkletRuntime = require(dependencyMap[8]).createWorkletRuntime;
export const runOnRuntime = require(dependencyMap[8]).runOnRuntime;
export const makeShareable = require(dependencyMap[5]).makeShareable;
export const makeShareableCloneRecursive = require(dependencyMap[5]).makeShareableCloneRecursive;
export const executeOnUIRuntimeSync = require(dependencyMap[9]).executeOnUIRuntimeSync;
export const runOnJS = require(dependencyMap[9]).runOnJS;
export const runOnUI = require(dependencyMap[9]).runOnUI;
export { isReanimated3 };
export const isConfigured = isReanimated3;
export const getViewProp = function getViewProp(arg0, arg1, arg2) {
  const global = arg0;
  const require = arg1;
  const dependencyMap = arg2;
  if (obj.isFabric()) {
    if (!arg2) {
      const ReanimatedError = require(dependencyMap[2]).ReanimatedError;
      const prototype = ReanimatedError.prototype;
      const reanimatedError = new ReanimatedError("Function `getViewProp` requires a component to be passed as an argument on Fabric.");
      throw reanimatedError;
    }
  }
  const obj = require(dependencyMap[1]);
  return new Promise((arg0, arg1) => {
    const ReanimatedModule = arg1(arg2[3]).ReanimatedModule;
    return ReanimatedModule.getViewProp(arg0, arg1, arg2, (str) => {
      if ("string" === typeof str) {
        if ("error:" === str.substr(0, 6)) {
          arg1(str);
        }
      }
      str(str);
    });
  });
};
export const registerEventHandler = function registerEventHandler(arg0, arg1) {
  const global = arg0;
  let num = -1;
  if (arguments.length > 2) {
    num = -1;
    if (undefined !== arguments[2]) {
      num = arguments[2];
    }
  }
  const ReanimatedModule = require(dependencyMap[3]).ReanimatedModule;
  const tmp = () => {
    function handleAndFlushAnimationFrame(__frameTimestamp) {
      lib.__frameTimestamp = __frameTimestamp;
      lib(arg1);
      const result = lib.__flushAnimationFrame(__frameTimestamp);
      lib.__frameTimestamp = undefined;
    }
    handleAndFlushAnimationFrame.__closure = { eventHandler: arg0 };
    handleAndFlushAnimationFrame.__workletHash = 6793284645440;
    handleAndFlushAnimationFrame.__initData = closure_5;
    return handleAndFlushAnimationFrame;
  }();
  return ReanimatedModule.registerEventHandler(require(dependencyMap[5]).makeShareableCloneRecursive(tmp), arg1, num);
};
export const unregisterEventHandler = function unregisterEventHandler(arg0) {
  const ReanimatedModule = require(dependencyMap[3]).ReanimatedModule;
  return ReanimatedModule.unregisterEventHandler(arg0);
};
export const subscribeForKeyboardEvents = function subscribeForKeyboardEvents(arg0, isStatusBarTranslucentAndroid) {
  const global = arg0;
  const ReanimatedModule = require(dependencyMap[3]).ReanimatedModule;
  const tmp = () => {
    function handleAndFlushAnimationFrame(arg0, arg1) {
      const result = lib._getAnimationTimestamp();
      lib.__frameTimestamp = result;
      lib(arg0, arg1);
      const result1 = lib.__flushAnimationFrame(result);
      lib.__frameTimestamp = undefined;
    }
    handleAndFlushAnimationFrame.__closure = { eventHandler: arg0 };
    handleAndFlushAnimationFrame.__workletHash = 11642615284685;
    handleAndFlushAnimationFrame.__initData = closure_6;
    return handleAndFlushAnimationFrame;
  }();
  let tmp3 = closure_3;
  const shareableCloneRecursive = require(dependencyMap[5]).makeShareableCloneRecursive(tmp);
  if (!closure_3) {
    isStatusBarTranslucentAndroid = isStatusBarTranslucentAndroid.isStatusBarTranslucentAndroid;
    tmp3 = null != isStatusBarTranslucentAndroid && isStatusBarTranslucentAndroid;
    const tmp5 = null != isStatusBarTranslucentAndroid && isStatusBarTranslucentAndroid;
  }
  let tmp6 = closure_3;
  if (!closure_3) {
    const isNavigationBarTranslucentAndroid = isStatusBarTranslucentAndroid.isNavigationBarTranslucentAndroid;
    tmp6 = null != isNavigationBarTranslucentAndroid && isNavigationBarTranslucentAndroid;
    const tmp8 = null != isNavigationBarTranslucentAndroid && isNavigationBarTranslucentAndroid;
  }
  return ReanimatedModule.subscribeForKeyboardEvents(shareableCloneRecursive, tmp3, tmp6);
};
export const unsubscribeFromKeyboardEvents = function unsubscribeFromKeyboardEvents(arg0) {
  const ReanimatedModule = require(dependencyMap[3]).ReanimatedModule;
  return ReanimatedModule.unsubscribeFromKeyboardEvents(arg0);
};
export const registerSensor = function registerSensor(arg0, arg1, arg2) {
  const obj = getSensorContainer();
  return obj.registerSensor(arg0, arg1, require(dependencyMap[5]).makeShareableCloneRecursive(arg2));
};
export const initializeSensor = function initializeSensor(arg0, arg1) {
  return getSensorContainer().initializeSensor(arg0, arg1);
};
export const unregisterSensor = function unregisterSensor(arg0) {
  return getSensorContainer().unregisterSensor(arg0);
};
export const enableLayoutAnimations = function enableLayoutAnimations(enableLayoutAnimations) {
  if (arguments.length > 1) {
    if (undefined !== arguments[1]) {
      if (!arguments[1]) {
        let setByUser = closure_7.setByUser;
        if (!setByUser) {
          setByUser = closure_7.enableLayoutAnimations === enableLayoutAnimations;
        }
        if (!setByUser) {
          closure_7.enableLayoutAnimations = enableLayoutAnimations;
          const ReanimatedModule = require(dependencyMap[3]).ReanimatedModule;
          const result = ReanimatedModule.enableLayoutAnimations(enableLayoutAnimations);
        }
      }
    }
  }
  closure_7 = { enableLayoutAnimations, setByUser: true };
  const ReanimatedModule2 = require(dependencyMap[3]).ReanimatedModule;
  const result1 = ReanimatedModule2.enableLayoutAnimations(enableLayoutAnimations);
};
export const configureLayoutAnimationBatch = function configureLayoutAnimationBatch(arg0) {
  const ReanimatedModule = require(dependencyMap[3]).ReanimatedModule;
  const result = ReanimatedModule.configureLayoutAnimationBatch(arg0);
};
export const setShouldAnimateExitingForTag = function setShouldAnimateExitingForTag(arg0, arg1) {
  const ReanimatedModule = require(dependencyMap[3]).ReanimatedModule;
  const result = ReanimatedModule.setShouldAnimateExitingForTag(arg0, arg1);
};
export const jsiConfigureProps = function jsiConfigureProps(keys, arg1) {
  if (!closure_4) {
    const ReanimatedModule = require(dependencyMap[3]).ReanimatedModule;
    ReanimatedModule.configureProps(keys, arg1);
  }
};
export const markNodeAsRemovable = function markNodeAsRemovable(arg0) {
  const ReanimatedModule = require(dependencyMap[3]).ReanimatedModule;
  ReanimatedModule.markNodeAsRemovable(arg0);
};
export const unmarkNodeAsRemovable = function unmarkNodeAsRemovable(arg0) {
  const ReanimatedModule = require(dependencyMap[3]).ReanimatedModule;
  const result = ReanimatedModule.unmarkNodeAsRemovable(arg0);
};
