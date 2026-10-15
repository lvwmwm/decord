// Module ID: 16762
// Function ID: 16763
// Name: DesignSystemBadgeSetting
// Dependencies: [8210, 1085, 10991, 16763, 2]

// Module 16762 (DesignSystemBadgeSetting)
import Constants from "Constants" /* 1085 */;
import SettingsConstants from "SettingsConstants" /* 8210 */;
import SettingBuilders from "SettingBuilders" /* 10991 */;
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
