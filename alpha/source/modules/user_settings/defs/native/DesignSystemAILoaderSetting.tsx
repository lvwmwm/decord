// Module ID: 17314
// Function ID: 17315
// Name: DesignSystemAILoaderSetting
// Dependencies: [8593, 1072, 11875, 17315, 2]

// Module 17314 (DesignSystemAILoaderSetting)
import Constants from "Constants" /* 1072 */;
import SettingsConstants from "SettingsConstants" /* 8593 */;
import SettingBuilders from "SettingBuilders" /* 11875 */;
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
