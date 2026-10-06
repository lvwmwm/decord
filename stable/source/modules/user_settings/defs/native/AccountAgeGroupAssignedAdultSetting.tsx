// Module ID: 14276
// Function ID: 14277
// Name: AccountAgeGroupAssignedAdultSetting
// Dependencies: [7421, 1086, 10874, 1127, 3042, 14277, 14272, 2]

// Module 14276 (AccountAgeGroupAssignedAdultSetting)
import Constants from "Constants" /* 1086 */;
import intl3 from "intl" /* 1127 */;
import _modDef3042 from "module_3042" /* 3042 */;
import SettingsConstants from "SettingsConstants" /* 7421 */;
import AgeGroupScreenRowProps from "AgeGroupScreenRowProps" /* 14277 */;
import SettingBuilders from "SettingBuilders" /* 10874 */;
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
    return "" + stringResult + " \u2022 " + intl2.string(_modDef3042.FTawSP);
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
