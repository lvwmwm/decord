// Module ID: 15990
// Function ID: 15991
// Name: AccountAgeGroupAssignedAdultSetting
// Dependencies: [8330, 1087, 11204, 1128, 3090, 15991, 15986, 2]

// Module 15990 (AccountAgeGroupAssignedAdultSetting)
import Constants from "Constants" /* 1087 */;
import intl3 from "intl" /* 1128 */;
import _modDef3090 from "module_3090" /* 3090 */;
import SettingsConstants from "SettingsConstants" /* 8330 */;
import AgeGroupScreenRowProps from "AgeGroupScreenRowProps" /* 15991 */;
import SettingBuilders from "SettingBuilders" /* 11204 */;
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
    return "" + stringResult + " \u2022 " + intl2.string(_modDef3090.FTawSP);
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
