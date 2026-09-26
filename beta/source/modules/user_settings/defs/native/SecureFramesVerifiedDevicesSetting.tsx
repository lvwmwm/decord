// Module ID: 16181
// Function ID: 16182
// Name: SecureFramesVerifiedDevicesSetting
// Dependencies: [8265, 1074, 11754, 1115, 16182, 2]

// Module 16181 (SecureFramesVerifiedDevicesSetting)
import Constants from "Constants" /* 1074 */;
import util from "util" /* 1115 */;
import SettingsConstants from "SettingsConstants" /* 8265 */;
import SettingBuilders from "SettingBuilders" /* 11754 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["5b3FNI"]);
  },
  parent: SettingsConstants.MobileUserSettings.DATA_AND_PRIVACY,
  unsearchable: true,
  screen: {
    route: Constants.UserSettingsSections.SECURE_FRAMES_VERIFIED_DEVICES,
    getComponent() {
      return require("SettingsSecureFramesVerificationsScreen").default;
    }
  }
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/SecureFramesVerifiedDevicesSetting.tsx");

export default route;
