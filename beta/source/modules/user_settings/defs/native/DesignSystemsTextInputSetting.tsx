// Module ID: 16097
// Function ID: 16098
// Name: DesignSystemsTextInputSetting
// Dependencies: [8270, 1078, 11630, 16098, 2]

// Module 16097 (DesignSystemsTextInputSetting)
import Constants from "Constants" /* 1078 */;
import SettingsConstants from "SettingsConstants" /* 8270 */;
import SettingBuilders from "SettingBuilders" /* 11630 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const route = SettingBuilders.createRoute({
  useTitle() {
    return "Text Input";
  },
  parent: SettingsConstants.MobileUserSettings.DESIGN_SYSTEMS,
  screen: {
    route: Constants.UserSettingsSections.DESIGN_SYSTEM_TEXT_INPUT,
    getComponent() {
      return require("UserSettingsDesignSystemTextInput").default;
    }
  }
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/DesignSystemsTextInputSetting.tsx");

export default route;
