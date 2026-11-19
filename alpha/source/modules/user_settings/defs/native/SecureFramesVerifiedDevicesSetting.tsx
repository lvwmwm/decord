// Module ID: 17394
// Function ID: 17395
// Name: SecureFramesVerifiedDevicesSetting
// Dependencies: [8593, 1072, 11875, 1113, 17395, 2]

// Module 17394 (SecureFramesVerifiedDevicesSetting)
import Constants from "Constants" /* 1072 */;
import intl2 from "intl" /* 1113 */;
import SettingsConstants from "SettingsConstants" /* 8593 */;
import SettingBuilders from "SettingBuilders" /* 11875 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const UserSettingsSections = Constants.UserSettingsSections;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t["5b3FNI"]);
  },
  parent: MobileUserSettings.DATA_AND_PRIVACY,
  unsearchable: true,
  screen: {
    route: UserSettingsSections.SECURE_FRAMES_VERIFIED_DEVICES,
    getComponent() {
      return require("SettingsSecureFramesVerificationsScreen").default;
    }
  }
};
const route = SettingBuilders.createRoute(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/SecureFramesVerifiedDevicesSetting.tsx");

export default route;
