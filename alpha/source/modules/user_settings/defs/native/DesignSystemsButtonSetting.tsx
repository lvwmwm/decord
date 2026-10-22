// Module ID: 17046
// Function ID: 17047
// Name: DesignSystemsButtonSetting
// Dependencies: [8318, 1087, 11181, 17047, 2]

// Module 17046 (DesignSystemsButtonSetting)
import Constants from "Constants" /* 1087 */;
import SettingsConstants from "SettingsConstants" /* 8318 */;
import SettingBuilders from "SettingBuilders" /* 11181 */;
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
