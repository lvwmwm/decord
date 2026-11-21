// Module ID: 17217
// Function ID: 17218
// Name: DesignSystemsTableRowSetting
// Dependencies: [8712, 1071, 11937, 17218, 2]

// Module 17217 (DesignSystemsTableRowSetting)
import Constants from "Constants" /* 1071 */;
import SettingsConstants from "SettingsConstants" /* 8712 */;
import SettingBuilders from "SettingBuilders" /* 11937 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const UserSettingsSections = Constants.UserSettingsSections;
const obj = {
  useTitle() {
    return "Table Row";
  },
  parent: MobileUserSettings.DESIGN_SYSTEMS,
  screen: {
    route: UserSettingsSections.DESIGN_SYSTEM_TABLE_ROW,
    getComponent() {
      return require("UserSettingsDesignSystemTableRow").default;
    }
  }
};
const route = SettingBuilders.createRoute(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/DesignSystemsTableRowSetting.tsx");

export default route;
