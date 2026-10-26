// Module ID: 16019
// Function ID: 16020
// Name: AccountAgeGroupAssignedAdultSetting
// Dependencies: [8332, 1087, 11208, 1128, 3090, 16020, 16015, 2]

// Module 16019 (AccountAgeGroupAssignedAdultSetting)
import Constants from "Constants" /* 1087 */;
import intl3 from "intl" /* 1128 */;
import _modDef3090 from "module_3090" /* 3090 */;
import SettingsConstants from "SettingsConstants" /* 8332 */;
import AgeGroupScreenRowProps from "AgeGroupScreenRowProps" /* 16020 */;
import SettingBuilders from "SettingBuilders" /* 11208 */;
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
