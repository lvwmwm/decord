// Module ID: 16038
// Function ID: 16039
// Name: AccountAgeGroupAssignedAdultSetting
// Dependencies: [8712, 1071, 11942, 1112, 3444, 16039, 16034, 2]

// Module 16038 (AccountAgeGroupAssignedAdultSetting)
import Constants from "Constants" /* 1071 */;
import intl3 from "intl" /* 1112 */;
import _modDef3444 from "module_3444" /* 3444 */;
import SettingsConstants from "SettingsConstants" /* 8712 */;
import AgeGroupScreenRowProps from "AgeGroupScreenRowProps" /* 16039 */;
import SettingBuilders from "SettingBuilders" /* 11942 */;
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
    return "" + stringResult + " \u2022 " + intl2.string(_modDef3444.FTawSP);
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
