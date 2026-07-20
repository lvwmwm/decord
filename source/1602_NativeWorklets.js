// Module ID: 1602
// Function ID: 17817
// Name: NativeWorklets
// Dependencies: []
// Exports: createNativeWorkletsModule

// Module 1602 (NativeWorklets)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3])("workletsModuleProxy");
let closure_7 = () => {
  class NativeWorklets {
    constructor() {
      tmp = closure_3(this, NativeWorklets);
      definePropertyResult = Object.defineProperty(this, closure_6, { writable: true, value: undefined });
      if (undefined === NativeWorklets.__workletsModuleProxy) {
        tmp3 = closure_1;
        tmp4 = closure_2;
        num = 4;
        obj = closure_1(closure_2[4]);
        num2 = 5;
        valueUnpackerCode = obj.getValueUnpackerCode();
        tmp6 = null;
        if (null != closure_1(closure_2[5]).WorkletsTurboModule) {
          tmp7 = closure_1;
          tmp8 = closure_2;
          WorkletsTurboModule = closure_1(closure_2[5]).WorkletsTurboModule;
          installTurboModuleResult = WorkletsTurboModule.installTurboModule(valueUnpackerCode);
        }
      }
      if (undefined === NativeWorklets.__workletsModuleProxy) {
        tmp13 = closure_1;
        tmp14 = closure_2;
        num3 = 6;
        ReanimatedError = closure_1(closure_2[6]).ReanimatedError;
        prototype = ReanimatedError.prototype;
        tmp15 = new.target;
        str = "Native part of Reanimated doesn't seem to be initialized (Worklets).\nSee https://docs.swmansion.com/react-native-reanimated/docs/guides/troubleshooting#native-part-of-reanimated-doesnt-seem-to-be-initialized for more details.";
        tmp16 = new.target;
        reanimatedError = new ReanimatedError("Native part of Reanimated doesn't seem to be initialized (Worklets).\nSee https://docs.swmansion.com/react-native-reanimated/docs/guides/troubleshooting#native-part-of-reanimated-doesnt-seem-to-be-initialized for more details.");
        tmp18 = reanimatedError;
        throw reanimatedError;
      } else {
        tmp10 = closure_5;
        tmp11 = closure_6;
        tmp12 = NativeWorklets;
        closure_5(this, closure_6)[closure_6] = NativeWorklets.__workletsModuleProxy;
        return;
      }
    }
  }
  const global = NativeWorklets;
  const items = [
    {
      key: "makeShareableClone",
      value: function makeShareableClone(arg0, arg1, arg2) {
        return callback3(this, closure_6)[closure_6].makeShareableClone(arg0, arg1, arg2);
      }
    }
  ];
  return callback(NativeWorklets, items);
}();

export const createNativeWorkletsModule = function createNativeWorkletsModule() {
  return new closure_7();
};
