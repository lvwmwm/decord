// Module ID: 15364
// Function ID: 15365
// Name: AccountAgeGroupAssignedAdultSetting
// Dependencies: [8000, 1085, 10767, 1126, 3120, 15365, 15360, 2]

// Module 15364 (AccountAgeGroupAssignedAdultSetting)
import Constants from "Constants" /* 1085 */;
import intl3 from "intl" /* 1126 */;
import _modDef3120 from "module_3120" /* 3120 */;
import SettingsConstants from "SettingsConstants" /* 8000 */;
import AgeGroupScreenRowProps from "AgeGroupScreenRowProps" /* 15365 */;
import SettingBuilders from "SettingBuilders" /* 10767 */;
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
    return "" + stringResult + " \u2022 " + intl2.string(_modDef3120.FTawSP);
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
