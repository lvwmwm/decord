// Module ID: 15983
// Function ID: 15984
// Name: DesignSystemHapticsSetting
// Dependencies: [7966, 1085, 11262, 15984, 2]

// Module 15983 (DesignSystemHapticsSetting)
import Constants from "Constants" /* 1085 */;
import SettingsConstants from "SettingsConstants" /* 7966 */;
import SettingBuilders from "SettingBuilders" /* 11262 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const UserSettingsSections = Constants.UserSettingsSections;
const obj = {
  useTitle() {
    return "Haptics";
  },
  parent: MobileUserSettings.DESIGN_SYSTEMS,
  screen: {
    route: UserSettingsSections.DESIGN_SYSTEM_HAPTICS,
    getComponent() {
      return require("UserSettingsDesignSystemHaptics").default;
    }
  }
};
const route = SettingBuilders.createRoute(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/DesignSystemHapticsSetting.tsx");

export default route;
