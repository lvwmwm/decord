// Module ID: 1608
// Function ID: 17839
// Name: NativeReanimatedModule
// Dependencies: [6, 7, 99, 100, 1598, 1609, 1604, 1593, 1585, 1610]
// Exports: createNativeReanimatedModule

// Module 1608 (NativeReanimatedModule)
import ReanimatedTurboModule from "ReanimatedTurboModule";
import processStack from "processStack";
import _classPrivateFieldBase from "_classPrivateFieldBase";
import importDefaultResult from "_classPrivateFieldKey";

const require = arg1;
let closure_6 = importDefaultResult("workletsModule");
let closure_7 = importDefaultResult("reanimatedModuleProxy");
let closure_8 = (() => {
  class NativeReanimatedModule {
    constructor() {
      self = this;
      tmp = outer1_3(this, NativeReanimatedModule);
      definePropertyResult = Object.defineProperty(this, outer1_6, { writable: true, value: undefined });
      definePropertyResult1 = Object.defineProperty(this, outer1_7, { writable: true, value: undefined });
      tmp4 = outer1_5(this, outer1_6);
      tmp4[outer1_6] = outer1_1(outer1_2[4]).WorkletsModule;
      NativeReanimatedModule._REANIMATED_VERSION_JS = outer1_1(outer1_2[5]).jsVersion;
      if (undefined === NativeReanimatedModule.__reanimatedModuleProxy) {
        tmp5 = outer1_1;
        tmp6 = outer1_2;
        num = 6;
        if (outer1_1(outer1_2[6]).ReanimatedTurboModule) {
          tmp7 = outer1_1;
          tmp8 = outer1_2;
          ReanimatedTurboModule = outer1_1(outer1_2[6]).ReanimatedTurboModule;
          if (!ReanimatedTurboModule.installTurboModule()) {
            tmp9 = outer1_5;
            tmp10 = outer1_7;
            tmp12 = outer1_9;
            prototype = outer1_9.prototype;
            tmp13 = new.target;
            tmp14 = new.target;
            tmp11 = outer1_5(self, outer1_7);
            tmp15 = new outer1_9();
            tmp16 = tmp15;
            tmp11[outer1_7] = tmp15;
          }
          return;
        }
      }
      if (undefined === NativeReanimatedModule.__reanimatedModuleProxy) {
        tmp20 = outer1_1;
        tmp21 = outer1_2;
        num2 = 7;
        ReanimatedError = outer1_1(outer1_2[7]).ReanimatedError;
        prototype2 = ReanimatedError.prototype;
        tmp22 = new.target;
        str = "Native part of Reanimated doesn't seem to be initialized.\nSee https://docs.swmansion.com/react-native-reanimated/docs/guides/troubleshooting#native-part-of-reanimated-doesnt-seem-to-be-initialized for more details.";
        tmp23 = new.target;
        reanimatedError = new ReanimatedError("Native part of Reanimated doesn't seem to be initialized.\nSee https://docs.swmansion.com/react-native-reanimated/docs/guides/troubleshooting#native-part-of-reanimated-doesnt-seem-to-be-initialized for more details.");
        tmp25 = reanimatedError;
        throw reanimatedError;
      } else {
        tmp17 = outer1_5;
        tmp18 = outer1_7;
        tmp19 = NativeReanimatedModule;
        outer1_5(self, outer1_7)[outer1_7] = NativeReanimatedModule.__reanimatedModuleProxy;
      }
      return;
    }
  }
  let obj = {
    key: "scheduleOnUI",
    value: function scheduleOnUI(arg0) {
      return outer1_5(this, outer1_7)[outer1_7].scheduleOnUI(arg0);
    }
  };
  const items = [obj, , , , , , , , , , , , , , , , , ];
  obj = {
    key: "executeOnUIRuntimeSync",
    value: function executeOnUIRuntimeSync(arg0) {
      return outer1_5(this, outer1_7)[outer1_7].executeOnUIRuntimeSync(arg0);
    }
  };
  items[1] = obj;
  obj = {
    key: "createWorkletRuntime",
    value: function createWorkletRuntime(arg0, arg1) {
      return outer1_5(this, outer1_7)[outer1_7].createWorkletRuntime(arg0, arg1);
    }
  };
  items[2] = obj;
  items[3] = {
    key: "scheduleOnRuntime",
    value: function scheduleOnRuntime(arg0, arg1) {
      return outer1_5(this, outer1_7)[outer1_7].scheduleOnRuntime(arg0, arg1);
    }
  };
  items[4] = {
    key: "registerSensor",
    value: function registerSensor(arg0, arg1, arg2, arg3) {
      return outer1_5(this, outer1_7)[outer1_7].registerSensor(arg0, arg1, arg2, arg3);
    }
  };
  items[5] = {
    key: "unregisterSensor",
    value: function unregisterSensor(arg0) {
      return outer1_5(this, outer1_7)[outer1_7].unregisterSensor(arg0);
    }
  };
  items[6] = {
    key: "registerEventHandler",
    value: function registerEventHandler(arg0, arg1, arg2) {
      return outer1_5(this, outer1_7)[outer1_7].registerEventHandler(arg0, arg1, arg2);
    }
  };
  items[7] = {
    key: "unregisterEventHandler",
    value: function unregisterEventHandler(arg0) {
      return outer1_5(this, outer1_7)[outer1_7].unregisterEventHandler(arg0);
    }
  };
  items[8] = {
    key: "getViewProp",
    value: function getViewProp(arg0, arg1, self) {
      self = this;
      if (obj.isFabric()) {
        const obj3 = outer1_1(outer1_2[9]);
        const shadowNodeWrapperFromRef = outer1_1(outer1_2[9]).getShadowNodeWrapperFromRef(self);
        let viewProp = outer1_5(self, outer1_7)[outer1_7].getViewProp(shadowNodeWrapperFromRef, arg1, arg3);
        const obj4 = outer1_5(self, outer1_7)[outer1_7];
      } else {
        viewProp = outer1_5(self, outer1_7)[outer1_7].getViewProp(arg0, arg1, arg3);
        const obj2 = outer1_5(self, outer1_7)[outer1_7];
      }
      return viewProp;
    }
  };
  items[9] = {
    key: "configureLayoutAnimationBatch",
    value: function configureLayoutAnimationBatch(arg0) {
      const result = outer1_5(this, outer1_7)[outer1_7].configureLayoutAnimationBatch(arg0);
    }
  };
  items[10] = {
    key: "setShouldAnimateExitingForTag",
    value: function setShouldAnimateExitingForTag(arg0, arg1) {
      const result = outer1_5(this, outer1_7)[outer1_7].setShouldAnimateExitingForTag(arg0, arg1);
    }
  };
  items[11] = {
    key: "enableLayoutAnimations",
    value: function enableLayoutAnimations(arg0) {
      const result = outer1_5(this, outer1_7)[outer1_7].enableLayoutAnimations(arg0);
    }
  };
  items[12] = {
    key: "configureProps",
    value: function configureProps(arg0, arg1) {
      outer1_5(this, outer1_7)[outer1_7].configureProps(arg0, arg1);
    }
  };
  items[13] = {
    key: "subscribeForKeyboardEvents",
    value: function subscribeForKeyboardEvents(arg0, arg1, arg2) {
      return outer1_5(this, outer1_7)[outer1_7].subscribeForKeyboardEvents(arg0, arg1, arg2);
    }
  };
  items[14] = {
    key: "unsubscribeFromKeyboardEvents",
    value: function unsubscribeFromKeyboardEvents(arg0) {
      const result = outer1_5(this, outer1_7)[outer1_7].unsubscribeFromKeyboardEvents(arg0);
    }
  };
  items[15] = {
    key: "markNodeAsRemovable",
    value: function markNodeAsRemovable(arg0) {
      outer1_5(this, outer1_7)[outer1_7].markNodeAsRemovable(arg0);
    }
  };
  items[16] = {
    key: "unmarkNodeAsRemovable",
    value: function unmarkNodeAsRemovable(arg0) {
      const result = outer1_5(this, outer1_7)[outer1_7].unmarkNodeAsRemovable(arg0);
    }
  };
  items[17] = {
    key: "getSettledUpdates",
    value: function getSettledUpdates() {
      return outer1_5(this, outer1_7)[outer1_7].getSettledUpdates();
    }
  };
  return callback(NativeReanimatedModule, items);
})();
let closure_9 = (() => {
  class DummyReanimatedModuleProxy {
    constructor() {
      tmp = outer1_3(this, DummyReanimatedModuleProxy);
      return;
    }
  }
  let obj = {
    key: "scheduleOnUI",
    value: function scheduleOnUI() {

    }
  };
  const items = [obj, , , , , , , , , , , , , , , , , ];
  obj = {
    key: "executeOnUIRuntimeSync",
    value: function executeOnUIRuntimeSync() {
      return null;
    }
  };
  items[1] = obj;
  obj = {
    key: "createWorkletRuntime",
    value: function createWorkletRuntime() {
      return null;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "scheduleOnRuntime",
    value: function scheduleOnRuntime() {

    }
  };
  items[4] = {
    key: "configureLayoutAnimationBatch",
    value: function configureLayoutAnimationBatch() {

    }
  };
  items[5] = {
    key: "setShouldAnimateExitingForTag",
    value: function setShouldAnimateExitingForTag() {

    }
  };
  items[6] = {
    key: "enableLayoutAnimations",
    value: function enableLayoutAnimations() {

    }
  };
  items[7] = {
    key: "configureProps",
    value: function configureProps() {

    }
  };
  items[8] = {
    key: "subscribeForKeyboardEvents",
    value: function subscribeForKeyboardEvents() {
      return -1;
    }
  };
  items[9] = {
    key: "unsubscribeFromKeyboardEvents",
    value: function unsubscribeFromKeyboardEvents() {

    }
  };
  items[10] = {
    key: "markNodeAsRemovable",
    value: function markNodeAsRemovable() {

    }
  };
  items[11] = {
    key: "unmarkNodeAsRemovable",
    value: function unmarkNodeAsRemovable() {

    }
  };
  items[12] = {
    key: "registerSensor",
    value: function registerSensor() {
      return -1;
    }
  };
  items[13] = {
    key: "unregisterSensor",
    value: function unregisterSensor() {

    }
  };
  items[14] = {
    key: "registerEventHandler",
    value: function registerEventHandler() {
      return -1;
    }
  };
  items[15] = {
    key: "unregisterEventHandler",
    value: function unregisterEventHandler() {

    }
  };
  items[16] = {
    key: "getViewProp",
    value: function getViewProp() {
      return null;
    }
  };
  items[17] = {
    key: "getSettledUpdates",
    value: function getSettledUpdates() {
      return [];
    }
  };
  return callback(DummyReanimatedModuleProxy, items);
})();

export const createNativeReanimatedModule = function createNativeReanimatedModule() {
  return new closure_8();
};
