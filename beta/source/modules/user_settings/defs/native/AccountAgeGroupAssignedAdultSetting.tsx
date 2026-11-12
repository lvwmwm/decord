// Module ID: 16977
// Function ID: 16978
// Name: AccountAgeGroupAssignedAdultSetting
// Dependencies: [8536, 1072, 11717, 1113, 3252, 16978, 16973, 2]

// Module 16977 (AccountAgeGroupAssignedAdultSetting)
import Constants from "Constants" /* 1072 */;
import intl3 from "intl" /* 1113 */;
import _modDef3252 from "module_3252" /* 3252 */;
import SettingsConstants from "SettingsConstants" /* 8536 */;
import AgeGroupScreenRowProps from "AgeGroupScreenRowProps" /* 16978 */;
import SettingBuilders from "SettingBuilders" /* 11717 */;
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
    return "" + stringResult + " \u2022 " + intl2.string(_modDef3252.FTawSP);
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
