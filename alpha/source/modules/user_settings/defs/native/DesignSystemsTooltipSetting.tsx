// Module ID: 18321
// Function ID: 18322
// Name: DesignSystemsTooltipSetting
// Dependencies: [9136, 1072, 12317, 18322, 2]

// Module 18321 (DesignSystemsTooltipSetting)
import Constants from "Constants" /* 1072 */;
import SettingsConstants from "SettingsConstants" /* 9136 */;
import SettingBuilders from "SettingBuilders" /* 12317 */;
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
