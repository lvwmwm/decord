// Module ID: 17256
// Function ID: 17257
// Name: DesignSystemsNavigatorSetting
// Dependencies: [8712, 1071, 11942, 17257, 2]

// Module 17256 (DesignSystemsNavigatorSetting)
import Constants from "Constants" /* 1071 */;
import SettingsConstants from "SettingsConstants" /* 8712 */;
import SettingBuilders from "SettingBuilders" /* 11942 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const UserSettingsSections = Constants.UserSettingsSections;
const obj = {
  useTitle() {
    return "Navigator";
  },
  parent: MobileUserSettings.DESIGN_SYSTEMS,
  screen: {
    route: UserSettingsSections.DESIGN_SYSTEM_NAVIGATOR,
    getComponent() {
      return require("UserSettingsDesignSystemNavigator").default;
    }
  }
};
const route = SettingBuilders.createRoute(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/DesignSystemsNavigatorSetting.tsx");

export default route;
