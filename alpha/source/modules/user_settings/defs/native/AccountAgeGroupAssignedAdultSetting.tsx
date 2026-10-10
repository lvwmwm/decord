// Module ID: 14983
// Function ID: 14984
// Name: AccountAgeGroupAssignedAdultSetting
// Dependencies: [7992, 1085, 10663, 1126, 3120, 14984, 14979, 2]

// Module 14983 (AccountAgeGroupAssignedAdultSetting)
import Constants from "Constants" /* 1085 */;
import intl3 from "intl" /* 1126 */;
import _modDef3120 from "module_3120" /* 3120 */;
import SettingsConstants from "SettingsConstants" /* 7992 */;
import AgeGroupScreenRowProps from "AgeGroupScreenRowProps" /* 14984 */;
import SettingBuilders from "SettingBuilders" /* 10663 */;
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
