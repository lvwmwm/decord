// Module ID: 1602
// Function ID: 17824
// Name: NativeWorklets
// Dependencies: [6, 7, 99, 100, 1603, 1604, 1593]
// Exports: createNativeWorkletsModule

// Module 1602 (NativeWorklets)
import processStack from "processStack";
import _defineProperties from "_defineProperties";
import _classPrivateFieldBase from "_classPrivateFieldBase";

const require = arg1;
let closure_6 = require("_classPrivateFieldKey")("workletsModuleProxy");
let closure_7 = (() => {
  class NativeWorklets {
    constructor() {
      tmp = outer1_3(this, NativeWorklets);
      definePropertyResult = Object.defineProperty(this, outer1_6, { writable: true, value: undefined });
      if (undefined === NativeWorklets.__workletsModuleProxy) {
        tmp3 = outer1_1;
        tmp4 = outer1_2;
        num = 4;
        obj = outer1_1(outer1_2[4]);
        num2 = 5;
        valueUnpackerCode = obj.getValueUnpackerCode();
        tmp6 = null;
        if (null != outer1_1(outer1_2[5]).WorkletsTurboModule) {
          tmp7 = outer1_1;
          tmp8 = outer1_2;
          WorkletsTurboModule = outer1_1(outer1_2[5]).WorkletsTurboModule;
          installTurboModuleResult = WorkletsTurboModule.installTurboModule(valueUnpackerCode);
        }
      }
      if (undefined === NativeWorklets.__workletsModuleProxy) {
        tmp13 = outer1_1;
        tmp14 = outer1_2;
        num3 = 6;
        ReanimatedError = outer1_1(outer1_2[6]).ReanimatedError;
        prototype = ReanimatedError.prototype;
        tmp15 = new.target;
        str = "Native part of Reanimated doesn't seem to be initialized (Worklets).\nSee https://docs.swmansion.com/react-native-reanimated/docs/guides/troubleshooting#native-part-of-reanimated-doesnt-seem-to-be-initialized for more details.";
        tmp16 = new.target;
        reanimatedError = new ReanimatedError("Native part of Reanimated doesn't seem to be initialized (Worklets).\nSee https://docs.swmansion.com/react-native-reanimated/docs/guides/troubleshooting#native-part-of-reanimated-doesnt-seem-to-be-initialized for more details.");
        tmp18 = reanimatedError;
        throw reanimatedError;
      } else {
        tmp10 = outer1_5;
        tmp11 = outer1_6;
        tmp12 = NativeWorklets;
        outer1_5(this, outer1_6)[outer1_6] = NativeWorklets.__workletsModuleProxy;
        return;
      }
    }
  }
  const items = [
    {
      key: "makeShareableClone",
      value: function makeShareableClone(arg0, arg1, arg2) {
        return outer1_5(this, outer1_6)[outer1_6].makeShareableClone(arg0, arg1, arg2);
      }
    }
  ];
  return callback(NativeWorklets, items);
})();

export const createNativeWorkletsModule = function createNativeWorkletsModule() {
  return new closure_7();
};
