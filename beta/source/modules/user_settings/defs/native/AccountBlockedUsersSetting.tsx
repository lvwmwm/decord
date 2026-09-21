// Module ID: 15066
// Function ID: 15067
// Name: AccountBlockedUsersSetting
// Dependencies: [4409, 8238, 1078, 558, 568, 504, 1119, 11594, 8192, 15067, 2]

// Module 15066 (AccountBlockedUsersSetting)
import initialize from "initialize" /* 504 */;
import c from "c" /* 568 */;
import util from "util" /* 1119 */;
import RelationshipStore from "RelationshipStore" /* 4409 */;

require = fn;
const ReactCompilerGating = fn(558);
const SettingBuilders = fn(11594);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [RelationshipStore];
    const fn = function o() {
      return "" + blockedIDs.getBlockedIDs().length;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const stateFromStores = initialize.useStateFromStores(tmp4, tmp5);
  if (cResult[2] !== stateFromStores) {
    const intl = tmp(1119).intl;
    const obj2 = { numberOfBlockedUsers: stateFromStores };
    const formatResult = intl.format(tmp(1119).t["r91W/h"], obj2);
    cResult[2] = stateFromStores;
    cResult[3] = formatResult;
    let tmp8 = formatResult;
  } else {
    tmp8 = cResult[3];
  }
  return tmp8;
}) : (() => {
  const items = [RelationshipStore];
  const numberOfBlockedUsers = initialize.useStateFromStores(items, () => "" + blockedIDs.getBlockedIDs().length);
  const intl = util.intl;
  return intl.format(util.t["r91W/h"], { numberOfBlockedUsers });
});
const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.PFOUKW);
  },
  useDescription: ReactCompilerGating.isReactCompilerEnabled() ? (() => {
    const cResult = c.c(4);
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const items = [RelationshipStore];
      const fn = function o() {
        return "" + blockedIDs.getBlockedIDs().length;
      };
      cResult[0] = items;
      cResult[1] = fn;
      tmp4 = items;
      tmp5 = fn;
    } else {
      [tmp4, tmp5] = cResult;
    }
    const stateFromStores = initialize.useStateFromStores(tmp4, tmp5);
    if (cResult[2] !== stateFromStores) {
      const intl = tmp(1119).intl;
      const obj2 = { numberOfBlockedUsers: stateFromStores };
      const formatResult = intl.format(tmp(1119).t["r91W/h"], obj2);
      cResult[2] = stateFromStores;
      cResult[3] = formatResult;
      let tmp8 = formatResult;
    } else {
      tmp8 = cResult[3];
    }
    return tmp8;
  }) : (() => {
    const items = [RelationshipStore];
    const numberOfBlockedUsers = initialize.useStateFromStores(items, () => "" + blockedIDs.getBlockedIDs().length);
    const intl = util.intl;
    return intl.format(util.t["r91W/h"], { numberOfBlockedUsers });
  }),
  IconComponent: fn(8192).DenyIcon,
  parent: fn(8238).MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  screen: {
    route: fn(1078).UserSettingsSections.BLOCKED_USERS_V2,
    getComponent() {
      return require("BlockedUsersListV2").default;
    }
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AccountBlockedUsersSetting.tsx");

export default route;
export const AccountBlockedUsersSettingV2 = route;
