// Module ID: 16400
// Function ID: 126683
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 16400 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
const NativeModules = arg1(dependencyMap[5]).NativeModules;
let closure_8 = importDefault(dependencyMap[6]);
let tmp2 = (arg0) => {
  class UserSettingsNativeBridgeManager {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = closure_3(this, UserSettingsNativeBridgeManager);
      items1 = [...items];
      obj = closure_5(UserSettingsNativeBridgeManager);
      tmp2 = closure_4;
      if (closure_9()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_5;
        constructResult = Reflect.construct(obj, items1, closure_5(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      obj2 = UserSettingsNativeBridgeManager(closure_1[7]);
      tmp2Result.saveExplicitContentSettingsToDisk = obj2.isIOS() ? () => {
        const settings = settings.settings;
        if (null != settings) {
          const textAndImages = settings.textAndImages;
          if (null != textAndImages) {
            const explicitContentSettings = textAndImages.explicitContentSettings;
          }
        }
        const NSUserDefaultsBridge = NSUserDefaultsBridge.NSUserDefaultsBridge;
        if (null != NSUserDefaultsBridge) {
          const _JSON = JSON;
          const result = NSUserDefaultsBridge.setExplicitContentSettingsJSONString(JSON.stringify(explicitContentSettings));
        }
      } : () => {

      };
      tmp2Result.actions = { POST_CONNECTION_OPEN: tmp2Result.saveExplicitContentSettingsToDisk, USER_SETTINGS_PROTO_UPDATE: tmp2Result.saveExplicitContentSettingsToDisk };
      return tmp2Result;
    }
  }
  const arg1 = UserSettingsNativeBridgeManager;
  callback2(UserSettingsNativeBridgeManager, arg0);
  return callback(UserSettingsNativeBridgeManager);
}(importDefault(dependencyMap[8]));
tmp2 = new tmp2();
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/user_settings/privacy_and_safety/native/UserSettingsNativeBridgeManager.tsx");

export default tmp2;
