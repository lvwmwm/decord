// Module ID: 14732
// Function ID: 14733
// Name: FamilyCenterSettingParentalControlsSetting
// Dependencies: [7634, 1085, 11129, 1126, 2493, 14733, 2]

// Module 14732 (FamilyCenterSettingParentalControlsSetting)
import Constants from "Constants" /* 1085 */;
import intl2 from "intl" /* 1126 */;
import _modDef2493 from "module_2493" /* 2493 */;
import SettingsConstants from "SettingsConstants" /* 7634 */;
import SettingBuilders from "SettingBuilders" /* 11129 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const UserSettingsSections = Constants.UserSettingsSections;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef2493.ahKIJO);
  },
  parent: MobileUserSettings.FAMILY_CENTER,
  unsearchable: true,
  screen: {
    route: UserSettingsSections.FAMILY_CENTER_PARENTAL_CONTROLS,
    getComponent() {
      return require("UserSettingsFamilyCenterParentalControls").default;
    }
  }
};
const route = SettingBuilders.createRoute(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/FamilyCenterSettingParentalControlsSetting.tsx");

export default route;
export const FamilyCenterParentalControlsSetting = route;
