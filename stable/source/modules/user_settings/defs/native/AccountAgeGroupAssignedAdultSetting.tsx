// Module ID: 15033
// Function ID: 15034
// Name: AccountAgeGroupAssignedAdultSetting
// Dependencies: [8265, 1074, 11754, 1115, 3034, 15034, 15029, 2]

// Module 15033 (AccountAgeGroupAssignedAdultSetting)
import Constants from "Constants" /* 1074 */;
import util from "util" /* 1115 */;
import _modDef3034 from "module_3034" /* 3034 */;
import SettingsConstants from "SettingsConstants" /* 8265 */;
import AgeGroupScreenRowProps from "AgeGroupScreenRowProps" /* 15034 */;
import SettingBuilders from "SettingBuilders" /* 11754 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.piqs0o);
  },
  parent: SettingsConstants.MobileUserSettings.ACCOUNT,
  useTrailing() {
    const intl = util.intl;
    const intl2 = util.intl;
    return "" + intl.string(util.t.XxRj7f) + " \u2022 " + intl2.string(_modDef3034.FTawSP);
  },
  usePredicate: AgeGroupScreenRowProps.useShowAssignedAdultAgeGroupRow,
  screen: {
    route: Constants.UserSettingsSections.AGE_GROUP,
    getComponent() {
      return require("SettingsAgeGroupScreen").default;
    }
  }
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AccountAgeGroupAssignedAdultSetting.tsx");

export default route;
