// Module ID: 18425
// Function ID: 18426
// Name: SecureFramesVerifiedDevicesSetting
// Dependencies: [9136, 1072, 12317, 1113, 18426, 2]

// Module 18425 (SecureFramesVerifiedDevicesSetting)
import Constants from "Constants" /* 1072 */;
import intl2 from "intl" /* 1113 */;
import SettingsConstants from "SettingsConstants" /* 9136 */;
import SettingBuilders from "SettingBuilders" /* 12317 */;
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
