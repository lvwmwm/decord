// Module ID: 18456
// Function ID: 18457
// Name: DesignSystemBadgeSetting
// Dependencies: [9202, 1072, 12406, 18457, 2]

// Module 18456 (DesignSystemBadgeSetting)
import Constants from "Constants" /* 1072 */;
import SettingsConstants from "SettingsConstants" /* 9202 */;
import SettingBuilders from "SettingBuilders" /* 12406 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const UserSettingsSections = Constants.UserSettingsSections;
const obj = {
  useTitle() {
    return "Badge";
  },
  parent: MobileUserSettings.DESIGN_SYSTEMS,
  screen: {
    route: UserSettingsSections.DESIGN_SYSTEM_BADGE,
    getComponent() {
      return require("UserSettingsDesignSystemBadge").default;
    }
  }
};
const route = SettingBuilders.createRoute(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/DesignSystemBadgeSetting.tsx");

export default route;
