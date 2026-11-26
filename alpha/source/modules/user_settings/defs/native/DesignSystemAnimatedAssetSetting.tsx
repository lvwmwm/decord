// Module ID: 17467
// Function ID: 17468
// Name: DesignSystemAnimatedAssetSetting
// Dependencies: [9555, 1071, 11962, 17468, 2]

// Module 17467 (DesignSystemAnimatedAssetSetting)
import Constants from "Constants" /* 1071 */;
import SettingsConstants from "SettingsConstants" /* 9555 */;
import SettingBuilders from "SettingBuilders" /* 11962 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const UserSettingsSections = Constants.UserSettingsSections;
const obj = {
  useTitle() {
    return "Animated Asset";
  },
  parent: MobileUserSettings.DESIGN_SYSTEMS,
  screen: {
    route: UserSettingsSections.DESIGN_SYSTEM_ANIMATED_ASSET,
    getComponent() {
      return require("UserSettingsDesignSystemAnimatedAsset").default;
    }
  }
};
const route = SettingBuilders.createRoute(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/DesignSystemAnimatedAssetSetting.tsx");

export default route;
