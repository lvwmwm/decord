// Module ID: 17243
// Function ID: 17244
// Name: DesignSystemsTextInputSetting
// Dependencies: [8712, 1071, 11942, 17244, 2]

// Module 17243 (DesignSystemsTextInputSetting)
import Constants from "Constants" /* 1071 */;
import SettingsConstants from "SettingsConstants" /* 8712 */;
import SettingBuilders from "SettingBuilders" /* 11942 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const UserSettingsSections = Constants.UserSettingsSections;
const obj = {
  useTitle() {
    return "Text Input";
  },
  parent: MobileUserSettings.DESIGN_SYSTEMS,
  screen: {
    route: UserSettingsSections.DESIGN_SYSTEM_TEXT_INPUT,
    getComponent() {
      return require("UserSettingsDesignSystemTextInput").default;
    }
  }
};
const route = SettingBuilders.createRoute(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/DesignSystemsTextInputSetting.tsx");

export default route;
