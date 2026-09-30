// Module ID: 15617
// Function ID: 15618
// Name: DesignSystemHapticsSetting
// Dependencies: [7612, 1074, 11211, 15618, 2]

// Module 15617 (DesignSystemHapticsSetting)
import Constants from "Constants" /* 1074 */;
import SettingsConstants from "SettingsConstants" /* 7612 */;
import SettingBuilders from "SettingBuilders" /* 11211 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const route = SettingBuilders.createRoute({
  useTitle() {
    return "Haptics";
  },
  parent: SettingsConstants.MobileUserSettings.DESIGN_SYSTEMS,
  screen: {
    route: Constants.UserSettingsSections.DESIGN_SYSTEM_HAPTICS,
    getComponent() {
      return require("UserSettingsDesignSystemHaptics").default;
    }
  }
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/DesignSystemHapticsSetting.tsx");

export default route;
