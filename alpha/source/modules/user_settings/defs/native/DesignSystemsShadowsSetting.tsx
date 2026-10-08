// Module ID: 15949
// Function ID: 15950
// Name: DesignSystemsShadowsSetting
// Dependencies: [7966, 1085, 11262, 15947, 2]

// Module 15949 (DesignSystemsShadowsSetting)
import Constants from "Constants" /* 1085 */;
import SettingsConstants from "SettingsConstants" /* 7966 */;
import SettingBuilders from "SettingBuilders" /* 11262 */;
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
