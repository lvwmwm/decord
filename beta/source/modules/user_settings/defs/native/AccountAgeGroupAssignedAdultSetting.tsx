// Module ID: 15029
// Function ID: 15030
// Name: AccountAgeGroupAssignedAdultSetting
// Dependencies: [8270, 1078, 11630, 1119, 3038, 15030, 15025, 2]

// Module 15029 (AccountAgeGroupAssignedAdultSetting)
import Constants from "Constants" /* 1078 */;
import util from "util" /* 1119 */;
import _modDef3038 from "module_3038" /* 3038 */;
import SettingsConstants from "SettingsConstants" /* 8270 */;
import AgeGroupScreenRowProps from "AgeGroupScreenRowProps" /* 15030 */;
import SettingBuilders from "SettingBuilders" /* 11630 */;
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
