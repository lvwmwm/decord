// Module ID: 15371
// Function ID: 15372
// Name: DesignSystemBackdropSetting
// Dependencies: [7412, 1074, 10993, 15372, 2]

// Module 15371 (DesignSystemBackdropSetting)
import Constants from "Constants" /* 1074 */;
import SettingsConstants from "SettingsConstants" /* 7412 */;
import SettingBuilders from "SettingBuilders" /* 10993 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const route = SettingBuilders.createRoute({
  useTitle() {
    return "Backdrop";
  },
  parent: SettingsConstants.MobileUserSettings.DESIGN_SYSTEMS,
  screen: {
    route: Constants.UserSettingsSections.DESIGN_SYSTEM_BACKDROP,
    getComponent() {
      return require("UserSettingsDesignSystemBackdrop").default;
    }
  }
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/DesignSystemBackdropSetting.tsx");

export default route;
