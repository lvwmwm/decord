// Module ID: 18016
// Function ID: 18017
// Name: DesignSystemsButtonSetting
// Dependencies: [8573, 1072, 11729, 18017, 2]

// Module 18016 (DesignSystemsButtonSetting)
import Constants from "Constants" /* 1072 */;
import SettingsConstants from "SettingsConstants" /* 8573 */;
import SettingBuilders from "SettingBuilders" /* 11729 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const UserSettingsSections = Constants.UserSettingsSections;
const obj = {
  useTitle() {
    return "Button";
  },
  parent: MobileUserSettings.DESIGN_SYSTEMS,
  screen: {
    route: UserSettingsSections.DESIGN_SYSTEM_BUTTON,
    getComponent() {
      return require("UserSettingsDesignSystemButton").default;
    }
  }
};
const route = SettingBuilders.createRoute(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/DesignSystemsButtonSetting.tsx");

export default route;
