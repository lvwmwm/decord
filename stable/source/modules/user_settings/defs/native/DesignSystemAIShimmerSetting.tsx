// Module ID: 16193
// Function ID: 16194
// Name: DesignSystemAIShimmerSetting
// Dependencies: [7988, 1085, 10664, 16194, 2]

// Module 16193 (DesignSystemAIShimmerSetting)
import Constants from "Constants" /* 1085 */;
import SettingsConstants from "SettingsConstants" /* 7988 */;
import SettingBuilders from "SettingBuilders" /* 10664 */;
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
