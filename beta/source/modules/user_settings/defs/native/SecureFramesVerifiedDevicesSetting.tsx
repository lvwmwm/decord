// Module ID: 16167
// Function ID: 16168
// Name: SecureFramesVerifiedDevicesSetting
// Dependencies: [8238, 1078, 11594, 1119, 16168, 2]

// Module 16167 (SecureFramesVerifiedDevicesSetting)
import Constants from "Constants" /* 1078 */;
import util from "util" /* 1119 */;
import SettingsConstants from "SettingsConstants" /* 8238 */;
import SettingBuilders from "SettingBuilders" /* 11594 */;
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
