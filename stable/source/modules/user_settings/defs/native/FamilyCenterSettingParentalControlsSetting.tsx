// Module ID: 15018
// Function ID: 15019
// Name: FamilyCenterSettingParentalControlsSetting
// Dependencies: [8079, 1074, 11605, 1114, 2396, 15019, 2]

// Module 15018 (FamilyCenterSettingParentalControlsSetting)
import Constants from "Constants" /* 1074 */;
import util from "util" /* 1114 */;
import _modDef2396 from "module_2396" /* 2396 */;
import SettingsConstants from "SettingsConstants" /* 8079 */;
import SettingBuilders from "SettingBuilders" /* 11605 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2396.ahKIJO);
  },
  parent: SettingsConstants.MobileUserSettings.FAMILY_CENTER,
  unsearchable: true,
  screen: {
    route: Constants.UserSettingsSections.FAMILY_CENTER_PARENTAL_CONTROLS,
    getComponent() {
      return require("UserSettingsFamilyCenterParentalControls").default;
    }
  }
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/FamilyCenterSettingParentalControlsSetting.tsx");

export default route;
export const FamilyCenterParentalControlsSetting = route;
