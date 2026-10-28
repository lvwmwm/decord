// Module ID: 16488
// Function ID: 16489
// Name: FamilyCenterSettingParentalControlsSetting
// Dependencies: [8365, 1084, 11248, 1125, 2535, 16489, 2]

// Module 16488 (FamilyCenterSettingParentalControlsSetting)
import Constants from "Constants" /* 1084 */;
import intl2 from "intl" /* 1125 */;
import _modDef2535 from "module_2535" /* 2535 */;
import SettingsConstants from "SettingsConstants" /* 8365 */;
import SettingBuilders from "SettingBuilders" /* 11248 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const UserSettingsSections = Constants.UserSettingsSections;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef2535.ahKIJO);
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
