// Module ID: 18109
// Function ID: 18110
// Name: DesignSystemsBackgroundBlurViewSetting
// Dependencies: [8503, 1072, 11685, 18108, 2]

// Module 18109 (DesignSystemsBackgroundBlurViewSetting)
import Constants from "Constants" /* 1072 */;
import SettingsConstants from "SettingsConstants" /* 8503 */;
import SettingBuilders from "SettingBuilders" /* 11685 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const UserSettingsSections = Constants.UserSettingsSections;
const obj = {
  useTitle() {
    return "Blur";
  },
  parent: MobileUserSettings.DESIGN_SYSTEMS,
  screen: {
    route: UserSettingsSections.DESIGN_SYSTEM_BACKGROUND_BLUR_VIEW,
    getComponent() {
      return require("UserSettingsDesignSystemAlertModal").default;
    }
  }
};
const route = SettingBuilders.createRoute(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/DesignSystemsBackgroundBlurViewSetting.tsx");

export default route;
