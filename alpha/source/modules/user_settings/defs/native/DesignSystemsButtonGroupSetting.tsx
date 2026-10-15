// Module ID: 16723
// Function ID: 16724
// Name: DesignSystemsButtonGroupSetting
// Dependencies: [8210, 1085, 10991, 16724, 2]

// Module 16723 (DesignSystemsButtonGroupSetting)
import Constants from "Constants" /* 1085 */;
import SettingsConstants from "SettingsConstants" /* 8210 */;
import SettingBuilders from "SettingBuilders" /* 10991 */;
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
