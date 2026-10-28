// Module ID: 17438
// Function ID: 17439
// Name: DesignSystemsModalSetting
// Dependencies: [8365, 1084, 11248, 17439, 2]

// Module 17438 (DesignSystemsModalSetting)
import Constants from "Constants" /* 1084 */;
import SettingsConstants from "SettingsConstants" /* 8365 */;
import SettingBuilders from "SettingBuilders" /* 11248 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const UserSettingsSections = Constants.UserSettingsSections;
const obj = {
  useTitle() {
    return "Modal";
  },
  parent: MobileUserSettings.DESIGN_SYSTEMS,
  screen: {
    route: UserSettingsSections.DESIGN_SYSTEM_MODAL,
    getComponent() {
      return require("UserSettingsDesignSystemModal").default;
    }
  }
};
const route = SettingBuilders.createRoute(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/DesignSystemsModalSetting.tsx");

export default route;
