// Module ID: 16574
// Function ID: 16575
// Name: AccountAgeGroupAssignedAdultSetting
// Dependencies: [8424, 1072, 11505, 1114, 3093, 16575, 16570, 2]

// Module 16574 (AccountAgeGroupAssignedAdultSetting)
import Constants from "Constants" /* 1072 */;
import intl3 from "intl" /* 1114 */;
import _modDef3093 from "module_3093" /* 3093 */;
import SettingsConstants from "SettingsConstants" /* 8424 */;
import AgeGroupScreenRowProps from "AgeGroupScreenRowProps" /* 16575 */;
import SettingBuilders from "SettingBuilders" /* 11505 */;
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
    return "" + stringResult + " \u2022 " + intl2.string(_modDef3093.FTawSP);
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
