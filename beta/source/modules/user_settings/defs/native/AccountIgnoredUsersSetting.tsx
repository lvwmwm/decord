// Module ID: 15082
// Function ID: 15083
// Name: AccountIgnoredUsersSetting
// Dependencies: [4441, 8270, 1078, 558, 568, 504, 1119, 11630, 7241, 15083, 2]

// Module 15082 (AccountIgnoredUsersSetting)
import initialize from "initialize" /* 504 */;
import c from "c" /* 568 */;
import util from "util" /* 1119 */;
import RelationshipStore from "RelationshipStore" /* 4441 */;

require = fn;
const ReactCompilerGating = fn(558);
const SettingBuilders = fn(11630);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(4);
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
  const stateFromStoresArray = initialize.useStateFromStoresArray(tmp4, tmp5);
  if (cResult[2] !== stateFromStoresArray.length) {
    const intl = tmp(1119).intl;
    const obj2 = { numberOfIgnoredUsers: stateFromStoresArray.length };
    const formatResult = intl.format(tmp(1119).t.rXUeOl, obj2);
    cResult[2] = stateFromStoresArray.length;
    cResult[3] = formatResult;
    let tmp7 = formatResult;
  } else {
    tmp7 = cResult[3];
  }
  return tmp7;
}) : (() => {
  const items = [RelationshipStore];
  const stateFromStoresArray = initialize.useStateFromStoresArray(items, () => ignoredIDs.getIgnoredIDs());
  const intl = util.intl;
  return intl.format(util.t.rXUeOl, { numberOfIgnoredUsers: stateFromStoresArray.length });
});
const route = SettingBuilders.createRoute({
  IconComponent: fn(7241).EyeSlashIcon,
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["93ZDWE"]);
  },
  useDescription: ReactCompilerGating.isReactCompilerEnabled() ? (() => {
    const cResult = c.c(4);
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
    const stateFromStoresArray = initialize.useStateFromStoresArray(tmp4, tmp5);
    if (cResult[2] !== stateFromStoresArray.length) {
      const intl = tmp(1119).intl;
      const obj2 = { numberOfIgnoredUsers: stateFromStoresArray.length };
      const formatResult = intl.format(tmp(1119).t.rXUeOl, obj2);
      cResult[2] = stateFromStoresArray.length;
      cResult[3] = formatResult;
      let tmp7 = formatResult;
    } else {
      tmp7 = cResult[3];
    }
    return tmp7;
  }) : (() => {
    const items = [RelationshipStore];
    const stateFromStoresArray = initialize.useStateFromStoresArray(items, () => ignoredIDs.getIgnoredIDs());
    const intl = util.intl;
    return intl.format(util.t.rXUeOl, { numberOfIgnoredUsers: stateFromStoresArray.length });
  }),
  parent: fn(8270).MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  screen: {
    route: fn(1078).UserSettingsSections.IGNORED_USERS,
    getComponent() {
      return require("IgnoredUsersList").default;
    }
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AccountIgnoredUsersSetting.tsx");

export default route;
