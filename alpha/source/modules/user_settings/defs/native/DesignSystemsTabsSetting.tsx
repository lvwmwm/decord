// Module ID: 18037
// Function ID: 18038
// Name: DesignSystemsTabsSetting
// Dependencies: [8573, 1072, 11729, 18038, 2]

// Module 18037 (DesignSystemsTabsSetting)
import Constants from "Constants" /* 1072 */;
import SettingsConstants from "SettingsConstants" /* 8573 */;
import SettingBuilders from "SettingBuilders" /* 11729 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const UserSettingsSections = Constants.UserSettingsSections;
const obj = {
  useTitle() {
    return "Tabs";
  },
  parent: MobileUserSettings.DESIGN_SYSTEMS,
  screen: {
    route: UserSettingsSections.DESIGN_SYSTEM_TABS,
    getComponent() {
      return require("UserSettingsDesignSystemTabs").default;
    }
  }
};
const route = SettingBuilders.createRoute(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/DesignSystemsTabsSetting.tsx");

export default route;
