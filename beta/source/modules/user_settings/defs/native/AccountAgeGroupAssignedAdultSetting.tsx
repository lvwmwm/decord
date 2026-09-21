// Module ID: 15020
// Function ID: 15021
// Name: AccountAgeGroupAssignedAdultSetting
// Dependencies: [8238, 1078, 11594, 1119, 3038, 15021, 14984, 2]

// Module 15020 (AccountAgeGroupAssignedAdultSetting)
import Constants from "Constants" /* 1078 */;
import util from "util" /* 1119 */;
import _modDef3038 from "module_3038" /* 3038 */;
import SettingsConstants from "SettingsConstants" /* 8238 */;
import AgeGroupScreenRowProps from "AgeGroupScreenRowProps" /* 15021 */;
import SettingBuilders from "SettingBuilders" /* 11594 */;
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
