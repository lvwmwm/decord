// Module ID: 18429
// Function ID: 18430
// Name: DesignSystemsTabsSetting
// Dependencies: [9202, 1072, 12406, 18430, 2]

// Module 18429 (DesignSystemsTabsSetting)
import Constants from "Constants" /* 1072 */;
import SettingsConstants from "SettingsConstants" /* 9202 */;
import SettingBuilders from "SettingBuilders" /* 12406 */;
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
