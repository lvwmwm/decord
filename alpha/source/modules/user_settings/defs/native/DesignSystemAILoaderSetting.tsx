// Module ID: 15691
// Function ID: 15692
// Name: DesignSystemAILoaderSetting
// Dependencies: [7634, 1085, 11129, 15692, 2]

// Module 15691 (DesignSystemAILoaderSetting)
import Constants from "Constants" /* 1085 */;
import SettingsConstants from "SettingsConstants" /* 7634 */;
import SettingBuilders from "SettingBuilders" /* 11129 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const UserSettingsSections = Constants.UserSettingsSections;
const obj = {
  useTitle() {
    return "AI Loader";
  },
  parent: MobileUserSettings.DESIGN_SYSTEMS,
  screen: {
    route: UserSettingsSections.DESIGN_SYSTEM_AI_LOADER,
    getComponent() {
      return require("UserSettingsDesignSystemAILoader").default;
    }
  }
};
const route = SettingBuilders.createRoute(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/DesignSystemAILoaderSetting.tsx");

export default route;
