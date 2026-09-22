// Module ID: 16189
// Function ID: 16190
// Name: SecureFramesVerifiedDevicesSetting
// Dependencies: [8237, 1074, 11729, 1115, 16190, 2]

// Module 16189 (SecureFramesVerifiedDevicesSetting)
import Constants from "Constants" /* 1074 */;
import util from "util" /* 1115 */;
import SettingsConstants from "SettingsConstants" /* 8237 */;
import SettingBuilders from "SettingBuilders" /* 11729 */;
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
