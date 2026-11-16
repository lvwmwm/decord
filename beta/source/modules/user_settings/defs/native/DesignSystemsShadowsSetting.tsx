// Module ID: 18426
// Function ID: 18427
// Name: DesignSystemsShadowsSetting
// Dependencies: [9202, 1072, 12406, 18424, 2]

// Module 18426 (DesignSystemsShadowsSetting)
import Constants from "Constants" /* 1072 */;
import SettingsConstants from "SettingsConstants" /* 9202 */;
import SettingBuilders from "SettingBuilders" /* 12406 */;
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
