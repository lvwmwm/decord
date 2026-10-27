// Module ID: 16838
// Function ID: 16839
// Name: DesignSystemsButtonGroupSetting
// Dependencies: [8260, 1087, 11084, 16839, 2]

// Module 16838 (DesignSystemsButtonGroupSetting)
import Constants from "Constants" /* 1087 */;
import SettingsConstants from "SettingsConstants" /* 8260 */;
import SettingBuilders from "SettingBuilders" /* 11084 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const UserSettingsSections = Constants.UserSettingsSections;
const obj = {
  useTitle() {
    return "Button Group";
  },
  parent: MobileUserSettings.DESIGN_SYSTEMS,
  screen: {
    route: UserSettingsSections.DESIGN_SYSTEM_BUTTON_GROUP,
    getComponent() {
      return require("UserSettingsDesignSystemButtonGroup").default;
    }
  }
};
const route = SettingBuilders.createRoute(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/DesignSystemsButtonGroupSetting.tsx");

export default route;
