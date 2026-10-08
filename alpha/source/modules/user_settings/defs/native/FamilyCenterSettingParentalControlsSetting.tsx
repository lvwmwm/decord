// Module ID: 15013
// Function ID: 15014
// Name: FamilyCenterSettingParentalControlsSetting
// Dependencies: [7966, 1085, 11262, 1126, 2565, 15014, 2]

// Module 15013 (FamilyCenterSettingParentalControlsSetting)
import Constants from "Constants" /* 1085 */;
import intl2 from "intl" /* 1126 */;
import _modDef2565 from "module_2565" /* 2565 */;
import SettingsConstants from "SettingsConstants" /* 7966 */;
import SettingBuilders from "SettingBuilders" /* 11262 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const UserSettingsSections = Constants.UserSettingsSections;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef2565.ahKIJO);
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
