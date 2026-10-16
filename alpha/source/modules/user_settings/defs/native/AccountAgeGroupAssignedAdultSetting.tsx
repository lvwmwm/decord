// Module ID: 15703
// Function ID: 15704
// Name: AccountAgeGroupAssignedAdultSetting
// Dependencies: [8214, 1087, 11003, 1128, 3125, 15704, 15699, 2]

// Module 15703 (AccountAgeGroupAssignedAdultSetting)
import Constants from "Constants" /* 1087 */;
import intl3 from "intl" /* 1128 */;
import _modDef3125 from "module_3125" /* 3125 */;
import SettingsConstants from "SettingsConstants" /* 8214 */;
import AgeGroupScreenRowProps from "AgeGroupScreenRowProps" /* 15704 */;
import SettingBuilders from "SettingBuilders" /* 11003 */;
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
    return "" + stringResult + " \u2022 " + intl2.string(_modDef3125.FTawSP);
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
