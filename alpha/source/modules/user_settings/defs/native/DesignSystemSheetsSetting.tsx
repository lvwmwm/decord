// Module ID: 16797
// Function ID: 16798
// Name: DesignSystemSheetsSetting
// Dependencies: [8213, 1087, 11006, 16798, 2]

// Module 16797 (DesignSystemSheetsSetting)
import Constants from "Constants" /* 1087 */;
import SettingsConstants from "SettingsConstants" /* 8213 */;
import SettingBuilders from "SettingBuilders" /* 11006 */;
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
