// Module ID: 18184
// Function ID: 18185
// Name: DesignSystemAIShimmerSetting
// Dependencies: [8536, 1072, 11717, 18185, 2]

// Module 18184 (DesignSystemAIShimmerSetting)
import Constants from "Constants" /* 1072 */;
import SettingsConstants from "SettingsConstants" /* 8536 */;
import SettingBuilders from "SettingBuilders" /* 11717 */;
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
