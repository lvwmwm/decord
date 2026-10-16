// Module ID: 16774
// Function ID: 16775
// Name: DesignSystemsExperimentalButtonsSetting
// Dependencies: [8214, 1087, 11003, 16775, 2]

// Module 16774 (DesignSystemsExperimentalButtonsSetting)
import Constants from "Constants" /* 1087 */;
import SettingsConstants from "SettingsConstants" /* 8214 */;
import SettingBuilders from "SettingBuilders" /* 11003 */;
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
