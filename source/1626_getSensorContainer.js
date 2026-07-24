// Module ID: 1626
// Function ID: 18184
// Name: getSensorContainer
// Dependencies: [1627, 1585, 1593, 1590, 1628, 1612, 1630, 1619, 1632, 1589]
// Exports: configureLayoutAnimationBatch, enableLayoutAnimations, getViewProp, initializeSensor, isConfigured, isReanimated3, jsiConfigureProps, markNodeAsRemovable, registerEventHandler, registerSensor, setShouldAnimateExitingForTag, subscribeForKeyboardEvents, unmarkNodeAsRemovable, unregisterEventHandler, unregisterSensor, unsubscribeFromKeyboardEvents

// Module 1626 (getSensorContainer)
import controlEdgeToEdgeValues from "controlEdgeToEdgeValues";
import isJest from "isJest";

function getSensorContainer() {
  if (!global.__sensorContainer) {
    const SensorContainer = require(1628) /* SensorContainer */.SensorContainer;
    const prototype = SensorContainer.prototype;
    const sensorContainer = new SensorContainer();
    global.__sensorContainer = sensorContainer;
  }
  return global.__sensorContainer;
}
controlEdgeToEdgeValues = controlEdgeToEdgeValues.isEdgeToEdge();
isJest = isJest.shouldBeUseWeb();
function isReanimated3() {
  return true;
}
let closure_5 = { code: "function handleAndFlushAnimationFrame_Pnpm_coreTs1(eventTimestamp,event){const{eventHandler}=this.__closure;global.__frameTimestamp=eventTimestamp;eventHandler(event);global.__flushAnimationFrame(eventTimestamp);global.__frameTimestamp=undefined;}" };
let closure_6 = { code: "function handleAndFlushAnimationFrame_Pnpm_coreTs2(state,height){const{eventHandler}=this.__closure;const now=global._getAnimationTimestamp();global.__frameTimestamp=now;eventHandler(state,height);global.__flushAnimationFrame(now);global.__frameTimestamp=undefined;}" };
let closure_7 = { enableLayoutAnimations: false, setByUser: false };

export const startMapper = require("createMapperRegistry").startMapper;
export const stopMapper = require("createMapperRegistry").stopMapper;
export const makeMutable = require("checkInvalidReadDuringRender").makeMutable;
export const createWorkletRuntime = require("createWorkletRuntime").createWorkletRuntime;
export const runOnRuntime = require("createWorkletRuntime").runOnRuntime;
export const makeShareable = require("isPlainJSObject").makeShareable;
export const makeShareableCloneRecursive = require("isPlainJSObject").makeShareableCloneRecursive;
export const executeOnUIRuntimeSync = require("runWorkletOnJS").executeOnUIRuntimeSync;
export const runOnJS = require("runWorkletOnJS").runOnJS;
export const runOnUI = require("runWorkletOnJS").runOnUI;
export { isReanimated3 };
export const isConfigured = isReanimated3;
export const getViewProp = function getViewProp(arg0, arg1, arg2) {
  let closure_0 = arg0;
  const _require = arg1;
  const dependencyMap = arg2;
  if (obj.isFabric()) {
    if (!arg2) {
      const ReanimatedError = _require(1593).ReanimatedError;
      const prototype = ReanimatedError.prototype;
      const reanimatedError = new ReanimatedError("Function `getViewProp` requires a component to be passed as an argument on Fabric.");
      throw reanimatedError;
    }
  }
  obj = _require(1585);
  return new Promise((arg0, arg1) => {
    let closure_0 = arg0;
    const callback = arg1;
    const ReanimatedModule = callback(table[3]).ReanimatedModule;
    return ReanimatedModule.getViewProp(closure_0, callback, table, (str) => {
      if ("string" === typeof str) {
        if ("error:" === str.substr(0, 6)) {
          callback2(str);
        }
      }
      callback(str);
    });
  });
};
export const registerEventHandler = function registerEventHandler(arg0, arg1) {
  let closure_0 = arg0;
  let num = -1;
  if (arguments.length > 2) {
    num = -1;
    if (undefined !== arguments[2]) {
      num = arguments[2];
    }
  }
  const ReanimatedModule = require(1590) /* ReanimatedModule */.ReanimatedModule;
  const tmp = (() => {
    function handleAndFlushAnimationFrame(__frameTimestamp) {
      closure_0.__frameTimestamp = __frameTimestamp;
      outer1_0(arg1);
      const result = closure_0.__flushAnimationFrame(__frameTimestamp);
      closure_0.__frameTimestamp = undefined;
    }
    handleAndFlushAnimationFrame.__closure = { eventHandler: closure_0 };
    handleAndFlushAnimationFrame.__workletHash = 6793284645440;
    handleAndFlushAnimationFrame.__initData = outer1_5;
    return handleAndFlushAnimationFrame;
  })();
  return ReanimatedModule.registerEventHandler(require(1612) /* isPlainJSObject */.makeShareableCloneRecursive(tmp), arg1, num);
};
export const unregisterEventHandler = function unregisterEventHandler(arg0) {
  const ReanimatedModule = require(1590) /* ReanimatedModule */.ReanimatedModule;
  return ReanimatedModule.unregisterEventHandler(arg0);
};
export const subscribeForKeyboardEvents = function subscribeForKeyboardEvents(arg0, isStatusBarTranslucentAndroid) {
  let closure_0 = arg0;
  const ReanimatedModule = require(1590) /* ReanimatedModule */.ReanimatedModule;
  const tmp = (() => {
    function handleAndFlushAnimationFrame(arg0, arg1) {
      const result = closure_0._getAnimationTimestamp();
      closure_0.__frameTimestamp = result;
      outer1_0(arg0, arg1);
      const result1 = closure_0.__flushAnimationFrame(result);
      closure_0.__frameTimestamp = undefined;
    }
    handleAndFlushAnimationFrame.__closure = { eventHandler: closure_0 };
    handleAndFlushAnimationFrame.__workletHash = 11642615284685;
    handleAndFlushAnimationFrame.__initData = outer1_6;
    return handleAndFlushAnimationFrame;
  })();
  let tmp3 = controlEdgeToEdgeValues;
  const shareableCloneRecursive = require(1612) /* isPlainJSObject */.makeShareableCloneRecursive(tmp);
  if (!controlEdgeToEdgeValues) {
    isStatusBarTranslucentAndroid = isStatusBarTranslucentAndroid.isStatusBarTranslucentAndroid;
    tmp3 = null != isStatusBarTranslucentAndroid && isStatusBarTranslucentAndroid;
    const tmp5 = null != isStatusBarTranslucentAndroid && isStatusBarTranslucentAndroid;
  }
  let tmp6 = controlEdgeToEdgeValues;
  if (!controlEdgeToEdgeValues) {
    const isNavigationBarTranslucentAndroid = isStatusBarTranslucentAndroid.isNavigationBarTranslucentAndroid;
    tmp6 = null != isNavigationBarTranslucentAndroid && isNavigationBarTranslucentAndroid;
    const tmp8 = null != isNavigationBarTranslucentAndroid && isNavigationBarTranslucentAndroid;
  }
  return ReanimatedModule.subscribeForKeyboardEvents(shareableCloneRecursive, tmp3, tmp6);
};
export const unsubscribeFromKeyboardEvents = function unsubscribeFromKeyboardEvents(arg0) {
  const ReanimatedModule = require(1590) /* ReanimatedModule */.ReanimatedModule;
  return ReanimatedModule.unsubscribeFromKeyboardEvents(arg0);
};
export const registerSensor = function registerSensor(arg0, arg1, arg2) {
  const obj = getSensorContainer();
  return obj.registerSensor(arg0, arg1, require(1612) /* isPlainJSObject */.makeShareableCloneRecursive(arg2));
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
        let setByUser = obj.setByUser;
        if (!setByUser) {
          setByUser = obj.enableLayoutAnimations === enableLayoutAnimations;
        }
        if (!setByUser) {
          obj.enableLayoutAnimations = enableLayoutAnimations;
          const ReanimatedModule = require(1590) /* ReanimatedModule */.ReanimatedModule;
          const result = ReanimatedModule.enableLayoutAnimations(enableLayoutAnimations);
        }
      }
    }
  }
  obj = { enableLayoutAnimations, setByUser: true };
  const ReanimatedModule2 = require(1590) /* ReanimatedModule */.ReanimatedModule;
  const result1 = ReanimatedModule2.enableLayoutAnimations(enableLayoutAnimations);
};
export const configureLayoutAnimationBatch = function configureLayoutAnimationBatch(arg0) {
  const ReanimatedModule = require(1590) /* ReanimatedModule */.ReanimatedModule;
  const result = ReanimatedModule.configureLayoutAnimationBatch(arg0);
};
export const setShouldAnimateExitingForTag = function setShouldAnimateExitingForTag(arg0, arg1) {
  const ReanimatedModule = require(1590) /* ReanimatedModule */.ReanimatedModule;
  const result = ReanimatedModule.setShouldAnimateExitingForTag(arg0, arg1);
};
export const jsiConfigureProps = function jsiConfigureProps(keys, arg1) {
  if (!isJest) {
    const ReanimatedModule = require(1590) /* ReanimatedModule */.ReanimatedModule;
    ReanimatedModule.configureProps(keys, arg1);
  }
};
export const markNodeAsRemovable = function markNodeAsRemovable(arg0) {
  const ReanimatedModule = require(1590) /* ReanimatedModule */.ReanimatedModule;
  ReanimatedModule.markNodeAsRemovable(arg0);
};
export const unmarkNodeAsRemovable = function unmarkNodeAsRemovable(arg0) {
  const ReanimatedModule = require(1590) /* ReanimatedModule */.ReanimatedModule;
  const result = ReanimatedModule.unmarkNodeAsRemovable(arg0);
};
