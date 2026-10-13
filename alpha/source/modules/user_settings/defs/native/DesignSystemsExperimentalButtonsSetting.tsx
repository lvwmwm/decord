// Module ID: 16451
// Function ID: 16452
// Name: DesignSystemsExperimentalButtonsSetting
// Dependencies: [7993, 1085, 10663, 16452, 2]

// Module 16451 (DesignSystemsExperimentalButtonsSetting)
import Constants from "Constants" /* 1085 */;
import SettingsConstants from "SettingsConstants" /* 7993 */;
import SettingBuilders from "SettingBuilders" /* 10663 */;
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
