// Module ID: 16108
// Function ID: 16109
// Name: DesignSystemsModalSetting
// Dependencies: [8233, 1074, 11725, 16109, 2]

// Module 16108 (DesignSystemsModalSetting)
import Constants from "Constants" /* 1074 */;
import SettingsConstants from "SettingsConstants" /* 8233 */;
import SettingBuilders from "SettingBuilders" /* 11725 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const route = SettingBuilders.createRoute({
  useTitle() {
    return "Modal";
  },
  parent: SettingsConstants.MobileUserSettings.DESIGN_SYSTEMS,
  screen: {
    route: Constants.UserSettingsSections.DESIGN_SYSTEM_MODAL,
    getComponent() {
      return require("UserSettingsDesignSystemModal").default;
    }
  }
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/DesignSystemsModalSetting.tsx");

export default route;
