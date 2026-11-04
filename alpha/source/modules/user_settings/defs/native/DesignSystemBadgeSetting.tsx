// Module ID: 18062
// Function ID: 18063
// Name: DesignSystemBadgeSetting
// Dependencies: [8573, 1072, 11729, 18063, 2]

// Module 18062 (DesignSystemBadgeSetting)
import Constants from "Constants" /* 1072 */;
import SettingsConstants from "SettingsConstants" /* 8573 */;
import SettingBuilders from "SettingBuilders" /* 11729 */;
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
