// Module ID: 16780
// Function ID: 16781
// Name: FamilyCenterSettingParentalControlsSetting
// Dependencies: [8424, 1072, 11505, 1114, 2537, 16781, 2]

// Module 16780 (FamilyCenterSettingParentalControlsSetting)
import Constants from "Constants" /* 1072 */;
import intl2 from "intl" /* 1114 */;
import _modDef2537 from "module_2537" /* 2537 */;
import SettingsConstants from "SettingsConstants" /* 8424 */;
import SettingBuilders from "SettingBuilders" /* 11505 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const UserSettingsSections = Constants.UserSettingsSections;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef2537.ahKIJO);
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
