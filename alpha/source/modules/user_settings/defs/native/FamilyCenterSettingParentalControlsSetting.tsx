// Module ID: 15863
// Function ID: 15864
// Name: FamilyCenterSettingParentalControlsSetting
// Dependencies: [8210, 1085, 10991, 1126, 2568, 15864, 2]

// Module 15863 (FamilyCenterSettingParentalControlsSetting)
import Constants from "Constants" /* 1085 */;
import intl2 from "intl" /* 1126 */;
import _modDef2568 from "module_2568" /* 2568 */;
import SettingsConstants from "SettingsConstants" /* 8210 */;
import SettingBuilders from "SettingBuilders" /* 10991 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const UserSettingsSections = Constants.UserSettingsSections;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef2568.ahKIJO);
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
