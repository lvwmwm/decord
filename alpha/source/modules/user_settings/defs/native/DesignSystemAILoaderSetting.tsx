// Module ID: 15619
// Function ID: 15620
// Name: DesignSystemAILoaderSetting
// Dependencies: [7612, 1074, 11211, 15620, 2]

// Module 15619 (DesignSystemAILoaderSetting)
import Constants from "Constants" /* 1074 */;
import SettingsConstants from "SettingsConstants" /* 7612 */;
import SettingBuilders from "SettingBuilders" /* 11211 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const route = SettingBuilders.createRoute({
  useTitle() {
    return "AI Loader";
  },
  parent: SettingsConstants.MobileUserSettings.DESIGN_SYSTEMS,
  screen: {
    route: Constants.UserSettingsSections.DESIGN_SYSTEM_AI_LOADER,
    getComponent() {
      return require("UserSettingsDesignSystemAILoader").default;
    }
  }
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/DesignSystemAILoaderSetting.tsx");

export default route;
