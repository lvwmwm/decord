// Module ID: 18077
// Function ID: 18078
// Name: DesignSystemsCoachmarkSetting
// Dependencies: [8578, 1072, 11737, 18078, 2]

// Module 18077 (DesignSystemsCoachmarkSetting)
import Constants from "Constants" /* 1072 */;
import SettingsConstants from "SettingsConstants" /* 8578 */;
import SettingBuilders from "SettingBuilders" /* 11737 */;
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
