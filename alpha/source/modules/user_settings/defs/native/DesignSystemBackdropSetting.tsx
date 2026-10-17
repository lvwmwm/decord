// Module ID: 16865
// Function ID: 16866
// Name: DesignSystemBackdropSetting
// Dependencies: [8260, 1087, 11065, 16866, 2]

// Module 16865 (DesignSystemBackdropSetting)
import Constants from "Constants" /* 1087 */;
import SettingsConstants from "SettingsConstants" /* 8260 */;
import SettingBuilders from "SettingBuilders" /* 11065 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const UserSettingsSections = Constants.UserSettingsSections;
const obj = {
  useTitle() {
    return "Backdrop";
  },
  parent: MobileUserSettings.DESIGN_SYSTEMS,
  screen: {
    route: UserSettingsSections.DESIGN_SYSTEM_BACKDROP,
    getComponent() {
      return require("UserSettingsDesignSystemBackdrop").default;
    }
  }
};
const route = SettingBuilders.createRoute(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/DesignSystemBackdropSetting.tsx");

export default route;
