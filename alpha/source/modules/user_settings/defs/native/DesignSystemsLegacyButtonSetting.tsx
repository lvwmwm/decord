// Module ID: 16445
// Function ID: 16446
// Name: DesignSystemsLegacyButtonSetting
// Dependencies: [7993, 1085, 10663, 16446, 2]

// Module 16445 (DesignSystemsLegacyButtonSetting)
import Constants from "Constants" /* 1085 */;
import SettingsConstants from "SettingsConstants" /* 7993 */;
import SettingBuilders from "SettingBuilders" /* 10663 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const UserSettingsSections = Constants.UserSettingsSections;
const obj = {
  useTitle() {
    return "Legacy Button";
  },
  parent: MobileUserSettings.DESIGN_SYSTEMS,
  screen: {
    route: UserSettingsSections.DESIGN_SYSTEM_LEGACY_BUTTON,
    getComponent() {
      return require("UserSettingsDesignSystemLegacyButton").default;
    }
  }
};
const route = SettingBuilders.createRoute(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/DesignSystemsLegacyButtonSetting.tsx");

export default route;
