// Module ID: 16242
// Function ID: 16243
// Name: FamilyCenterSettingParentalControlsSetting
// Dependencies: [8712, 1071, 11942, 1112, 2824, 16243, 2]

// Module 16242 (FamilyCenterSettingParentalControlsSetting)
import Constants from "Constants" /* 1071 */;
import intl2 from "intl" /* 1112 */;
import _modDef2824 from "module_2824" /* 2824 */;
import SettingsConstants from "SettingsConstants" /* 8712 */;
import SettingBuilders from "SettingBuilders" /* 11942 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const UserSettingsSections = Constants.UserSettingsSections;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef2824.ahKIJO);
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
