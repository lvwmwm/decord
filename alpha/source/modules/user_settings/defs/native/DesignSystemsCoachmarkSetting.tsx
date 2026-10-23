// Module ID: 17123
// Function ID: 17124
// Name: DesignSystemsCoachmarkSetting
// Dependencies: [8330, 1087, 11204, 17124, 2]

// Module 17123 (DesignSystemsCoachmarkSetting)
import Constants from "Constants" /* 1087 */;
import SettingsConstants from "SettingsConstants" /* 8330 */;
import SettingBuilders from "SettingBuilders" /* 11204 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const UserSettingsSections = Constants.UserSettingsSections;
const obj = {
  useTitle() {
    return "Coachmark";
  },
  parent: MobileUserSettings.DESIGN_SYSTEMS,
  screen: {
    route: UserSettingsSections.DESIGN_SYSTEM_COACHMARK,
    getComponent() {
      return require("UserSettingsDesignSystemCoachmark").default;
    }
  }
};
const route = SettingBuilders.createRoute(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/DesignSystemsCoachmarkSetting.tsx");

export default route;
