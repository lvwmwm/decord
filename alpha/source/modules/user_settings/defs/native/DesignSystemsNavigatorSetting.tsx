// Module ID: 17457
// Function ID: 17458
// Name: DesignSystemsNavigatorSetting
// Dependencies: [9556, 1071, 11970, 17458, 2]

// Module 17457 (DesignSystemsNavigatorSetting)
import Constants from "Constants" /* 1071 */;
import SettingsConstants from "SettingsConstants" /* 9556 */;
import SettingBuilders from "SettingBuilders" /* 11970 */;
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
