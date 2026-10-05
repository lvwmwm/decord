// Module ID: 14613
// Function ID: 14614
// Name: AccountIgnoredUsersSetting
// Dependencies: [4519, 7634, 1085, 558, 576, 504, 1126, 11129, 6456, 14614, 2]

// Module 14613 (AccountIgnoredUsersSetting)
import get_initialized from "get initialized" /* 504 */;
import react from "react" /* 576 */;
import Constants from "Constants" /* 1085 */;
import intl2 from "intl" /* 1126 */;
import EyeSlashIcon from "EyeSlashIcon" /* 6456 */;
import SettingsConstants from "SettingsConstants" /* 7634 */;
import RelationshipStore from "RelationshipStore" /* 4519 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 11129 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const UserSettingsSections = Constants.UserSettingsSections;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let ignoredIDs;
  let tmp4;
  let tmp5;
  let tmp7;
  const obj = react;
  const cResult = obj.c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [RelationshipStore];
    const fn = function s() {
      return ignoredIDs.getIgnoredIDs();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = get_initialized;
  const stateFromStoresArray = tmpResult.useStateFromStoresArray(tmp4, tmp5);
  if (cResult[2] !== stateFromStoresArray.length) {
    const intl = tmp(1126).intl;
    const obj2 = { numberOfIgnoredUsers: stateFromStoresArray.length };
    const formatResult = intl.format(intl2.t.rXUeOl, obj2);
    cResult[2] = stateFromStoresArray.length;
    cResult[3] = formatResult;
    tmp7 = formatResult;
  } else {
    tmp7 = cResult[3];
  }
  return tmp7;
}) : (() => {
  let ignoredIDs;
  const items = [RelationshipStore];
  const obj = get_initialized;
  const stateFromStoresArray = obj.useStateFromStoresArray(items, () => ignoredIDs.getIgnoredIDs());
  const intl = intl2.intl;
  const obj2 = { numberOfIgnoredUsers: stateFromStoresArray.length };
  return intl.format(intl2.t.rXUeOl, obj2);
});
let obj = {
  IconComponent: EyeSlashIcon.EyeSlashIcon,
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t["93ZDWE"]);
  },
  useDescription: tmp2,
  parent: MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  screen: {
    route: UserSettingsSections.IGNORED_USERS,
    getComponent() {
      return require("IgnoredUsersList").default;
    }
  }
};
const route = SettingBuilders.createRoute(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AccountIgnoredUsersSetting.tsx");

export default route;
