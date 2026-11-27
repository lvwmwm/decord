// Module ID: 17474
// Function ID: 17475
// Name: DesignSystemAnimatedAssetSetting
// Dependencies: [9556, 1071, 11970, 17475, 2]

// Module 17474 (DesignSystemAnimatedAssetSetting)
import Constants from "Constants" /* 1071 */;
import SettingsConstants from "SettingsConstants" /* 9556 */;
import SettingBuilders from "SettingBuilders" /* 11970 */;
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
