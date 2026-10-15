// Module ID: 15660
// Function ID: 15661
// Name: AccountAgeGroupAssignedAdultSetting
// Dependencies: [8210, 1085, 10991, 1126, 3122, 15661, 15656, 2]

// Module 15660 (AccountAgeGroupAssignedAdultSetting)
import Constants from "Constants" /* 1085 */;
import intl3 from "intl" /* 1126 */;
import _modDef3122 from "module_3122" /* 3122 */;
import SettingsConstants from "SettingsConstants" /* 8210 */;
import AgeGroupScreenRowProps from "AgeGroupScreenRowProps" /* 15661 */;
import SettingBuilders from "SettingBuilders" /* 10991 */;
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
    return "" + stringResult + " \u2022 " + intl2.string(_modDef3122.FTawSP);
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
