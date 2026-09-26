// Module ID: 16115
// Function ID: 16116
// Name: DesignSystemSheetsSetting
// Dependencies: [8265, 1074, 11754, 16116, 2]

// Module 16115 (DesignSystemSheetsSetting)
import Constants from "Constants" /* 1074 */;
import SettingsConstants from "SettingsConstants" /* 8265 */;
import SettingBuilders from "SettingBuilders" /* 11754 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const route = SettingBuilders.createRoute({
  useTitle() {
    return "Sheets";
  },
  parent: SettingsConstants.MobileUserSettings.DESIGN_SYSTEMS,
  screen: {
    route: Constants.UserSettingsSections.DESIGN_SYSTEM_SHEETS,
    getComponent() {
      return require("UserSettingsDesignSystemSheets").default;
    }
  }
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/DesignSystemSheetsSetting.tsx");

export default route;
