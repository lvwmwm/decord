// Module ID: 17211
// Function ID: 17212
// Name: DesignSystemsButtonGroupSetting
// Dependencies: [8712, 1071, 11937, 17212, 2]

// Module 17211 (DesignSystemsButtonGroupSetting)
import Constants from "Constants" /* 1071 */;
import SettingsConstants from "SettingsConstants" /* 8712 */;
import SettingBuilders from "SettingBuilders" /* 11937 */;
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
