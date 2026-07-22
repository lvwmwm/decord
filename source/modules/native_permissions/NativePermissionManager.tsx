// Module ID: 4673
// Function ID: 40716
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 4673 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
const NativePermissionTypes = arg1(dependencyMap[5]).NativePermissionTypes;
const InputModes = arg1(dependencyMap[6]).InputModes;
let tmp2 = (arg0) => {
  class NativePermissionManager {
    constructor() {
      self = this;
      tmp = closure_3(this, NativePermissionManager);
      obj = closure_6(NativePermissionManager);
      tmp2 = closure_5;
      if (closure_10()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_6;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_6(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const arg1 = NativePermissionManager;
  callback2(NativePermissionManager, arg0);
  let obj = {
    key: "isEnabled",
    value() {
      let isDesktopResult = NativePermissionManager(closure_2[7]).isDesktop();
      if (isDesktopResult) {
        isDesktopResult = NativePermissionManager(closure_2[7]).isMac();
        const obj2 = NativePermissionManager(closure_2[7]);
      }
      if (isDesktopResult) {
        const ProcessArgs = NativePermissionManager(closure_2[8]).ProcessArgs;
        isDesktopResult = !ProcessArgs.isDiscordTestSet();
      }
      return isDesktopResult;
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "_initialize",
    value() {
      if (this.isEnabled()) {
        const subscription = callback(closure_2[9]).subscribe("AUDIO_SET_MODE", this.handleAudioSetMode);
        const obj = callback(closure_2[9]);
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "_terminate",
    value() {
      if (this.isEnabled()) {
        callback(closure_2[9]).unsubscribe("AUDIO_SET_MODE", this.handleAudioSetMode);
        const obj = callback(closure_2[9]);
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: "handleAudioSetMode",
    value(mode) {
      if (mode.mode === constants2.PUSH_TO_TALK) {
        const permission = NativePermissionManager(closure_2[10]).default.requestPermission(constants.INPUT_MONITORING);
        const _default = NativePermissionManager(closure_2[10]).default;
      }
    }
  };
  return callback(NativePermissionManager, items);
}(importDefault(dependencyMap[11]));
tmp2 = new tmp2();
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/native_permissions/NativePermissionManager.tsx");

export default tmp2;
