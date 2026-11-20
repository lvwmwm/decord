// Module ID: 17143
// Function ID: 17144
// Name: DesignSystemAIShimmerSetting
// Dependencies: [8592, 1071, 11817, 17144, 2]

// Module 17143 (DesignSystemAIShimmerSetting)
import Constants from "Constants" /* 1071 */;
import SettingsConstants from "SettingsConstants" /* 8592 */;
import SettingBuilders from "SettingBuilders" /* 11817 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const UserSettingsSections = Constants.UserSettingsSections;
const obj = {
  useTitle() {
    return "AI Shimmer";
  },
  parent: MobileUserSettings.DESIGN_SYSTEMS,
  screen: {
    route: UserSettingsSections.DESIGN_SYSTEM_AI_SHIMMER,
    getComponent() {
      return require("UserSettingsDesignSystemAIShimmer").default;
    }
  }
};
const route = SettingBuilders.createRoute(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/DesignSystemAIShimmerSetting.tsx");

export default route;
