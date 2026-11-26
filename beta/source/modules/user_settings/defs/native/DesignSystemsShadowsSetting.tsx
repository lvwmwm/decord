// Module ID: 17236
// Function ID: 17237
// Name: DesignSystemsShadowsSetting
// Dependencies: [8712, 1071, 11942, 17234, 2]

// Module 17236 (DesignSystemsShadowsSetting)
import Constants from "Constants" /* 1071 */;
import SettingsConstants from "SettingsConstants" /* 8712 */;
import SettingBuilders from "SettingBuilders" /* 11942 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const UserSettingsSections = Constants.UserSettingsSections;
const obj = {
  useTitle() {
    return "Shadows";
  },
  parent: MobileUserSettings.DESIGN_SYSTEMS,
  screen: {
    route: UserSettingsSections.DESIGN_SYSTEM_SHADOWS,
    getComponent() {
      return require("UserSettingsDesignSystemAlertModal").default;
    }
  }
};
const route = SettingBuilders.createRoute(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/DesignSystemsShadowsSetting.tsx");

export default route;
