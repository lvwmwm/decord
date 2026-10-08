// Module ID: 15958
// Function ID: 15959
// Name: DesignSystemsToastSetting
// Dependencies: [7966, 1085, 11262, 15959, 2]

// Module 15958 (DesignSystemsToastSetting)
import Constants from "Constants" /* 1085 */;
import SettingsConstants from "SettingsConstants" /* 7966 */;
import SettingBuilders from "SettingBuilders" /* 11262 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const UserSettingsSections = Constants.UserSettingsSections;
const obj = {
  useTitle() {
    return "Toast";
  },
  parent: MobileUserSettings.DESIGN_SYSTEMS,
  screen: {
    route: UserSettingsSections.DESIGN_SYSTEM_TOAST,
    getComponent() {
      return require("UserSettingsDesignSystemToast").default;
    }
  }
};
const route = SettingBuilders.createRoute(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/DesignSystemsToastSetting.tsx");

export default route;
