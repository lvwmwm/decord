// Module ID: 16231
// Function ID: 16232
// Name: AccountAgeGroupAssignedAdultSetting
// Dependencies: [9555, 1071, 11962, 1112, 3499, 16232, 16227, 2]

// Module 16231 (AccountAgeGroupAssignedAdultSetting)
import Constants from "Constants" /* 1071 */;
import intl3 from "intl" /* 1112 */;
import _modDef3499 from "module_3499" /* 3499 */;
import SettingsConstants from "SettingsConstants" /* 9555 */;
import AgeGroupScreenRowProps from "AgeGroupScreenRowProps" /* 16232 */;
import SettingBuilders from "SettingBuilders" /* 11962 */;
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
    return "" + stringResult + " \u2022 " + intl2.string(_modDef3499.FTawSP);
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
