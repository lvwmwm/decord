// Module ID: 16858
// Function ID: 16859
// Name: DesignSystemsTooltipSetting
// Dependencies: [8260, 1087, 11065, 16859, 2]

// Module 16858 (DesignSystemsTooltipSetting)
import Constants from "Constants" /* 1087 */;
import SettingsConstants from "SettingsConstants" /* 8260 */;
import SettingBuilders from "SettingBuilders" /* 11065 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const UserSettingsSections = Constants.UserSettingsSections;
const obj = {
  useTitle() {
    return "Tooltip";
  },
  parent: MobileUserSettings.DESIGN_SYSTEMS,
  screen: {
    route: UserSettingsSections.DESIGN_SYSTEM_TOOLTIP,
    getComponent() {
      return require("UserSettingsDesignSystemTooltip").default;
    }
  }
};
const route = SettingBuilders.createRoute(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/DesignSystemsTooltipSetting.tsx");

export default route;
