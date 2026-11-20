// Module ID: 17101
// Function ID: 17102
// Name: DesignSystemsTabsSetting
// Dependencies: [8592, 1071, 11817, 17102, 2]

// Module 17101 (DesignSystemsTabsSetting)
import Constants from "Constants" /* 1071 */;
import SettingsConstants from "SettingsConstants" /* 8592 */;
import SettingBuilders from "SettingBuilders" /* 11817 */;
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
