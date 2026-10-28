// Module ID: 17409
// Function ID: 17410
// Name: DesignSystemsExperimentalButtonsSetting
// Dependencies: [8365, 1084, 11248, 17410, 2]

// Module 17409 (DesignSystemsExperimentalButtonsSetting)
import Constants from "Constants" /* 1084 */;
import SettingsConstants from "SettingsConstants" /* 8365 */;
import SettingBuilders from "SettingBuilders" /* 11248 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const UserSettingsSections = Constants.UserSettingsSections;
const obj = {
  useTitle() {
    return "Experimental Buttons";
  },
  parent: MobileUserSettings.DESIGN_SYSTEMS,
  screen: {
    route: UserSettingsSections.DESIGN_SYSTEM_EXPERIMENTAL_BUTTONS,
    getComponent() {
      return require("UserSettingsDesignSystemExperimentalButtons").default;
    }
  }
};
const route = SettingBuilders.createRoute(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/DesignSystemsExperimentalButtonsSetting.tsx");

export default route;
