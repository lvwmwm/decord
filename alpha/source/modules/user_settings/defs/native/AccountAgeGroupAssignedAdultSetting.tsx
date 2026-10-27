// Module ID: 16057
// Function ID: 16058
// Name: AccountAgeGroupAssignedAdultSetting
// Dependencies: [8331, 1084, 11212, 1125, 3091, 16058, 16053, 2]

// Module 16057 (AccountAgeGroupAssignedAdultSetting)
import Constants from "Constants" /* 1084 */;
import intl3 from "intl" /* 1125 */;
import _modDef3091 from "module_3091" /* 3091 */;
import SettingsConstants from "SettingsConstants" /* 8331 */;
import AgeGroupScreenRowProps from "AgeGroupScreenRowProps" /* 16058 */;
import SettingBuilders from "SettingBuilders" /* 11212 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const UserSettingsSections = Constants.UserSettingsSections;
const obj = {
  useTitle() {
    const intl = intl3.intl;
    return intl.string(intl3.t.piqs0o);
  },
  parent: MobileUserSettings.ACCOUNT,
  useTrailing() {
    const intl = intl3.intl;
    const stringResult = intl.string(intl3.t.XxRj7f);
    const intl2 = intl3.intl;
    return "" + stringResult + " \u2022 " + intl2.string(_modDef3091.FTawSP);
  },
  usePredicate: AgeGroupScreenRowProps.useShowAssignedAdultAgeGroupRow,
  screen: {
    route: UserSettingsSections.AGE_GROUP,
    getComponent() {
      return require("SettingsAgeGroupScreen").default;
    }
  }
};
const route = SettingBuilders.createRoute(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AccountAgeGroupAssignedAdultSetting.tsx");

export default route;
