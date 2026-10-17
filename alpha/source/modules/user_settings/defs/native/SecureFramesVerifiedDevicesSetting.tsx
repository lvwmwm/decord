// Module ID: 16955
// Function ID: 16956
// Name: SecureFramesVerifiedDevicesSetting
// Dependencies: [8260, 1087, 11065, 1128, 16956, 2]

// Module 16955 (SecureFramesVerifiedDevicesSetting)
import Constants from "Constants" /* 1087 */;
import intl2 from "intl" /* 1128 */;
import SettingsConstants from "SettingsConstants" /* 8260 */;
import SettingBuilders from "SettingBuilders" /* 11065 */;
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
