// Module ID: 16729
// Function ID: 16730
// Name: DesignSystemsTableRowSetting
// Dependencies: [8210, 1085, 10991, 16730, 2]

// Module 16729 (DesignSystemsTableRowSetting)
import Constants from "Constants" /* 1085 */;
import SettingsConstants from "SettingsConstants" /* 8210 */;
import SettingBuilders from "SettingBuilders" /* 10991 */;
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
