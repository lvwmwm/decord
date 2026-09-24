// Module ID: 15205
// Function ID: 15206
// Name: FamilyCenterSettingParentalControlsSetting
// Dependencies: [8270, 1078, 11630, 1119, 2486, 15206, 2]

// Module 15205 (FamilyCenterSettingParentalControlsSetting)
import Constants from "Constants" /* 1078 */;
import util from "util" /* 1119 */;
import _modDef2486 from "module_2486" /* 2486 */;
import SettingsConstants from "SettingsConstants" /* 8270 */;
import SettingBuilders from "SettingBuilders" /* 11630 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2486.ahKIJO);
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
