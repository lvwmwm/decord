// Module ID: 1700
// Function ID: 1701
// Name: startMapper
// Dependencies: [1701, 1659, 1667, 1664, 1702, 1686, 1704, 1693, 1706, 1663]
// Exports: configureLayoutAnimationBatch, enableLayoutAnimations, getViewProp, initializeSensor, isConfigured, isReanimated3, jsiConfigureProps, markNodeAsRemovable, registerEventHandler, registerSensor, setShouldAnimateExitingForTag, subscribeForKeyboardEvents, unmarkNodeAsRemovable, unregisterEventHandler, unregisterSensor, unsubscribeFromKeyboardEvents

// Module 1700 (startMapper)
import setupMicrotasks from "setupMicrotasks" /* 1663 */;
import ReanimatedModule3 from "ReanimatedModule" /* 1664 */;
import _mod1686 from "module_1686" /* 1686 */;
import _mod1693 from "module_1693" /* 1693 */;
import SensorContainer from "SensorContainer" /* 1702 */;
import _mod1704 from "module_1704" /* 1704 */;
import runOnRuntime from "runOnRuntime" /* 1706 */;
import react_native from "react-native" /* 1701 */;
import module_1659 from "module_1659" /* 1659 */;

const require = globalThis.__r;
let _require, dependencyMap;

let closure_3 = react_native.isEdgeToEdge();
let closure_4 = module_1659.shouldBeUseWeb();
function isReanimated3() {
  return true;
}
const __initData = { code: "function handleAndFlushAnimationFrame_Pnpm_coreTs1(eventTimestamp,event){const{eventHandler}=this.__closure;global.__frameTimestamp=eventTimestamp;eventHandler(event);global.__flushAnimationFrame(eventTimestamp);global.__frameTimestamp=undefined;}" };
const __initData2 = { code: "function handleAndFlushAnimationFrame_Pnpm_coreTs2(state,height){const{eventHandler}=this.__closure;const now=global._getAnimationTimestamp();global.__frameTimestamp=now;eventHandler(state,height);global.__flushAnimationFrame(now);global.__frameTimestamp=undefined;}" };
let obj = { enableLayoutAnimations: false, setByUser: false };
const runOnRuntime_export = runOnRuntime.runOnRuntime;

export const startMapper = _mod1704.startMapper;
export const stopMapper = _mod1704.stopMapper;
export const makeMutable = _mod1693.makeMutable;
export const createWorkletRuntime = runOnRuntime.createWorkletRuntime;
export { runOnRuntime_export as runOnRuntime };
export const makeShareable = _mod1686.makeShareable;
export const makeShareableCloneRecursive = _mod1686.makeShareableCloneRecursive;
export const executeOnUIRuntimeSync = setupMicrotasks.executeOnUIRuntimeSync;
export const runOnJS = setupMicrotasks.runOnJS;
export const runOnUI = setupMicrotasks.runOnUI;
export { isReanimated3 };
export const isConfigured = isReanimated3;
export const getViewProp = function getViewProp(arg0, arg1, arg2) {
  let closure_2;
  let closure_0 = arg0;
  _require = arg1;
  dependencyMap = arg2;
  obj = require("module_1659");
  const tmp = _require;
  if (obj.isFabric()) {
    if (!arg2) {
      const self = this;
      const self2 = this;
      const reanimatedError = new tmp(1667).ReanimatedError("Function `getViewProp` requires a component to be passed as an argument on Fabric.");
      throw reanimatedError;
    }
  }
  const promise = new Promise((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    const ReanimatedModule = ReanimatedModule3.ReanimatedModule;
    return ReanimatedModule.getViewProp(closure_0, closure_1, closure_2, (str) => {
      if (typeof str === "string") {
        if ("error:" === str.substr(0, 6)) {
          closure_1(str);
        }
      }
      closure_0(str);
    });
  });
  return promise;
};
export const registerEventHandler = function registerEventHandler(eventHandler, arg1) {
  let num = arg2;
  if (arg2 === undefined) {
    num = -1;
  }
  function handleAndFlushAnimationFrame(__frameTimestamp, arg1) {
    global.__frameTimestamp = __frameTimestamp;
    eventHandler(arg1);
    const result = global.__flushAnimationFrame(__frameTimestamp);
    global.__frameTimestamp = undefined;
  }
  handleAndFlushAnimationFrame.__closure = { eventHandler };
  handleAndFlushAnimationFrame.__workletHash = 6793284645440;
  handleAndFlushAnimationFrame.__initData = __initData;
  const ReanimatedModule = ReanimatedModule3.ReanimatedModule;
  const registerEventHandler = ReanimatedModule.registerEventHandler;
  obj = _mod1686;
  return registerEventHandler(obj.makeShareableCloneRecursive(handleAndFlushAnimationFrame), arg1, num);
};
export const unregisterEventHandler = function unregisterEventHandler(arg0) {
  const ReanimatedModule = ReanimatedModule3.ReanimatedModule;
  return ReanimatedModule.unregisterEventHandler(arg0);
};
export const subscribeForKeyboardEvents = function subscribeForKeyboardEvents(eventHandler, isStatusBarTranslucentAndroid) {
  function handleAndFlushAnimationFrame(arg0, arg1) {
    const result = global._getAnimationTimestamp();
    global.__frameTimestamp = result;
    eventHandler(arg0, arg1);
    const result1 = global.__flushAnimationFrame(result);
    global.__frameTimestamp = undefined;
  }
  handleAndFlushAnimationFrame.__closure = { eventHandler };
  handleAndFlushAnimationFrame.__workletHash = 11642615284685;
  handleAndFlushAnimationFrame.__initData = __initData2;
  const ReanimatedModule = ReanimatedModule3.ReanimatedModule;
  const subscribeForKeyboardEvents = ReanimatedModule.subscribeForKeyboardEvents;
  let tmp2 = closure_3;
  let tmp3 = closure_3;
  obj = _mod1686;
  const shareableCloneRecursive = obj.makeShareableCloneRecursive(handleAndFlushAnimationFrame);
  if (!closure_3) {
    let flag = isStatusBarTranslucentAndroid.isStatusBarTranslucentAndroid;
    if (flag == null) {
      flag = false;
    }
    tmp3 = flag;
  }
  if (!tmp2) {
    let flag2 = isStatusBarTranslucentAndroid.isNavigationBarTranslucentAndroid;
    if (flag2 == null) {
      flag2 = false;
    }
    tmp2 = flag2;
  }
  return subscribeForKeyboardEvents(shareableCloneRecursive, tmp3, tmp2);
};
export const unsubscribeFromKeyboardEvents = function unsubscribeFromKeyboardEvents(arg0) {
  const ReanimatedModule = ReanimatedModule3.ReanimatedModule;
  return ReanimatedModule.unsubscribeFromKeyboardEvents(arg0);
};
export const registerSensor = function registerSensor(arg0, arg1, arg2) {
  if (!global.__sensorContainer) {
    const self = this;
    const self2 = this;
    const sensorContainer = new SensorContainer.SensorContainer();
    global.__sensorContainer = sensorContainer;
  }
  const __sensorContainer = tmp.__sensorContainer;
  const registerSensor = __sensorContainer.registerSensor;
  obj = _mod1686;
  return registerSensor(arg0, arg1, obj.makeShareableCloneRecursive(arg2));
};
export const initializeSensor = function initializeSensor(arg0, arg1) {
  if (!global.__sensorContainer) {
    const self = this;
    const self2 = this;
    const sensorContainer = new SensorContainer.SensorContainer();
    global.__sensorContainer = sensorContainer;
  }
  const __sensorContainer = tmp.__sensorContainer;
  return __sensorContainer.initializeSensor(arg0, arg1);
};
export const unregisterSensor = function unregisterSensor(arg0) {
  if (!global.__sensorContainer) {
    const self = this;
    const self2 = this;
    const sensorContainer = new SensorContainer.SensorContainer();
    global.__sensorContainer = sensorContainer;
  }
  const __sensorContainer = tmp.__sensorContainer;
  return __sensorContainer.unregisterSensor(arg0);
};
export const enableLayoutAnimations = function enableLayoutAnimations(enableLayoutAnimations) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = true;
  }
  if (flag) {
    obj = { enableLayoutAnimations, setByUser: true };
    const ReanimatedModule2 = ReanimatedModule3.ReanimatedModule;
    const result = ReanimatedModule2.enableLayoutAnimations(enableLayoutAnimations);
  } else {
    const setByUser = obj.setByUser || obj.enableLayoutAnimations === enableLayoutAnimations;
    if (!setByUser) {
      obj.enableLayoutAnimations = enableLayoutAnimations;
      const ReanimatedModule = ReanimatedModule3.ReanimatedModule;
      const result1 = ReanimatedModule.enableLayoutAnimations(enableLayoutAnimations);
    }
  }
};
export const configureLayoutAnimationBatch = function configureLayoutAnimationBatch(arg0) {
  const ReanimatedModule = ReanimatedModule3.ReanimatedModule;
  const result = ReanimatedModule.configureLayoutAnimationBatch(arg0);
};
export const setShouldAnimateExitingForTag = function setShouldAnimateExitingForTag(arg0, arg1) {
  const ReanimatedModule = ReanimatedModule3.ReanimatedModule;
  const result = ReanimatedModule.setShouldAnimateExitingForTag(arg0, arg1);
};
export const jsiConfigureProps = function jsiConfigureProps(keys, arg1) {
  const tmp = closure_4;
  if (!tmp) {
    const ReanimatedModule = ReanimatedModule3.ReanimatedModule;
    ReanimatedModule.configureProps(keys, arg1);
  }
};
export const markNodeAsRemovable = function markNodeAsRemovable(arg0) {
  const ReanimatedModule = ReanimatedModule3.ReanimatedModule;
  ReanimatedModule.markNodeAsRemovable(arg0);
};
export const unmarkNodeAsRemovable = function unmarkNodeAsRemovable(arg0) {
  const ReanimatedModule = ReanimatedModule3.ReanimatedModule;
  const result = ReanimatedModule.unmarkNodeAsRemovable(arg0);
};
