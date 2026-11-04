// Module ID: 18052
// Function ID: 18053
// Name: DesignSystemStackSetting
// Dependencies: [8573, 1072, 11729, 18053, 2]

// Module 18052 (DesignSystemStackSetting)
import Constants from "Constants" /* 1072 */;
import SettingsConstants from "SettingsConstants" /* 8573 */;
import SettingBuilders from "SettingBuilders" /* 11729 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const UserSettingsSections = Constants.UserSettingsSections;
const obj = {
  useTitle() {
    return "Stack";
  },
  parent: MobileUserSettings.DESIGN_SYSTEMS,
  screen: {
    route: UserSettingsSections.DESIGN_SYSTEM_STACK,
    getComponent() {
      return require("UserSettingsDesignSystemStack").default;
    }
  }
};
const route = SettingBuilders.createRoute(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/DesignSystemStackSetting.tsx");

export default route;
