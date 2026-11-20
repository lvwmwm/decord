// Module ID: 15903
// Function ID: 15904
// Name: AccountAgeGroupAssignedAdultSetting
// Dependencies: [8592, 1071, 11817, 1112, 3345, 15904, 15899, 2]

// Module 15903 (AccountAgeGroupAssignedAdultSetting)
import Constants from "Constants" /* 1071 */;
import intl3 from "intl" /* 1112 */;
import _modDef3345 from "module_3345" /* 3345 */;
import SettingsConstants from "SettingsConstants" /* 8592 */;
import AgeGroupScreenRowProps from "AgeGroupScreenRowProps" /* 15904 */;
import SettingBuilders from "SettingBuilders" /* 11817 */;
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
    return "" + stringResult + " \u2022 " + intl2.string(_modDef3345.FTawSP);
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
