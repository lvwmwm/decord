// Module ID: 14500
// Function ID: 14501
// Name: AccountAgeGroupAssignedAdultSetting
// Dependencies: [7590, 1074, 11215, 1115, 3038, 14501, 14496, 2]

// Module 14500 (AccountAgeGroupAssignedAdultSetting)
import Constants from "Constants" /* 1074 */;
import util from "util" /* 1115 */;
import _modDef3038 from "module_3038" /* 3038 */;
import SettingsConstants from "SettingsConstants" /* 7590 */;
import AgeGroupScreenRowProps from "AgeGroupScreenRowProps" /* 14501 */;
import SettingBuilders from "SettingBuilders" /* 11215 */;
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
    return "" + intl.string(util.t.XxRj7f) + " \u2022 " + intl2.string(_modDef3038.FTawSP);
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
