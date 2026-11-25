// Module ID: 17266
// Function ID: 17267
// Name: DesignSystemSheetsSetting
// Dependencies: [8712, 1071, 11942, 17267, 2]

// Module 17266 (DesignSystemSheetsSetting)
import Constants from "Constants" /* 1071 */;
import SettingsConstants from "SettingsConstants" /* 8712 */;
import SettingBuilders from "SettingBuilders" /* 11942 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const UserSettingsSections = Constants.UserSettingsSections;
const obj = {
  useTitle() {
    return "Sheets";
  },
  parent: MobileUserSettings.DESIGN_SYSTEMS,
  screen: {
    route: UserSettingsSections.DESIGN_SYSTEM_SHEETS,
    getComponent() {
      return require("UserSettingsDesignSystemSheets").default;
    }
  }
};
const route = SettingBuilders.createRoute(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/DesignSystemSheetsSetting.tsx");

export default route;
