// Module ID: 18301
// Function ID: 18302
// Name: DesignSystemsExperimentalButtonsSetting
// Dependencies: [9136, 1072, 12317, 18302, 2]

// Module 18301 (DesignSystemsExperimentalButtonsSetting)
import Constants from "Constants" /* 1072 */;
import SettingsConstants from "SettingsConstants" /* 9136 */;
import SettingBuilders from "SettingBuilders" /* 12317 */;
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
