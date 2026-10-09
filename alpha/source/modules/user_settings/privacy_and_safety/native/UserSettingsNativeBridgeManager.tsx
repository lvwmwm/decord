// Module ID: 18512
// Function ID: 18513
// Name: UserSettingsNativeBridgeManager
// Dependencies: [17, 1244, 6804, 1382, 2]

// Module 18512 (UserSettingsNativeBridgeManager)
import react_native from "react-native" /* 17 */;
import PlatformUtils from "PlatformUtils" /* 1382 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1244 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 6804 */;
import size from "module_2" /* 2 */;

let NSUserDefaultsBridge, settings;

const NativeModules = react_native.NativeModules;
class UserSettingsNativeBridgeManager extends AutomaticLifecycleManager {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    const obj = PlatformUtils;
    applyArgumentsResult.saveExplicitContentSettingsToDisk = obj.isIOS() ? (() => {
      let explicitContentSettings;
      settings = settings.settings;
      if (settings != null) {
        const textAndImages = settings.textAndImages;
        if (textAndImages != null) {
          explicitContentSettings = textAndImages.explicitContentSettings;
        }
      }
      NSUserDefaultsBridge = NSUserDefaultsBridge.NSUserDefaultsBridge;
      if (NSUserDefaultsBridge != null) {
        const _JSON = JSON;
        const result = NSUserDefaultsBridge.setExplicitContentSettingsJSONString(JSON.stringify(explicitContentSettings));
      }
    }) : (() => {

    });
    applyArgumentsResult.actions = { POST_CONNECTION_OPEN: applyArgumentsResult.saveExplicitContentSettingsToDisk, USER_SETTINGS_PROTO_UPDATE: applyArgumentsResult.saveExplicitContentSettingsToDisk };
    return applyArgumentsResult;
  }
}
const userSettingsNativeBridgeManager = new UserSettingsNativeBridgeManager();
let result = size.fileFinishedImporting("modules/user_settings/privacy_and_safety/native/UserSettingsNativeBridgeManager.tsx");

export default userSettingsNativeBridgeManager;
