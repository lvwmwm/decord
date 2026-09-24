// Module ID: 16077
// Function ID: 16078
// Name: DesignSystemsRowButtonSetting
// Dependencies: [8270, 1078, 11630, 16078, 2]

// Module 16077 (DesignSystemsRowButtonSetting)
import Constants from "Constants" /* 1078 */;
import SettingsConstants from "SettingsConstants" /* 8270 */;
import SettingBuilders from "SettingBuilders" /* 11630 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const route = SettingBuilders.createRoute({
  useTitle() {
    return "Row Button";
  },
  parent: SettingsConstants.MobileUserSettings.DESIGN_SYSTEMS,
  screen: {
    route: Constants.UserSettingsSections.DESIGN_SYSTEM_ROW_BUTTON,
    getComponent() {
      return require("UserSettingsDesignSystemRowButton").default;
    }
  }
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/DesignSystemsRowButtonSetting.tsx");

export default route;
