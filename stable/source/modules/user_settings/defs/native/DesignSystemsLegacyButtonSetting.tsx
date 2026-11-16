// Module ID: 18132
// Function ID: 18133
// Name: DesignSystemsLegacyButtonSetting
// Dependencies: [8536, 1072, 11717, 18133, 2]

// Module 18132 (DesignSystemsLegacyButtonSetting)
import Constants from "Constants" /* 1072 */;
import SettingsConstants from "SettingsConstants" /* 8536 */;
import SettingBuilders from "SettingBuilders" /* 11717 */;
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
