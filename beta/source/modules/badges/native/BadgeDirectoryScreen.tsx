// Module ID: 11449
// Function ID: 11450
// Name: BadgeDirectoryScreen
// Dependencies: [19, 1376, 21, 558, 568, 504, 1119, 5839, 11448, 11450, 11453, 2]

// Module 11449 (BadgeDirectoryScreen)
import NavigatorHeader from "NavigatorHeader" /* 5839 */;
import openBadgeDirectoryScreen from "openBadgeDirectoryScreen" /* 11448 */;
import BadgeDirectoryViewDefault from "BadgeDirectoryView" /* 11450 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1376 */;

require = fn;
const jsx = fn(21).jsx;
let c6 = "badge-directory";
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/badges/native/BadgeDirectoryScreen.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((targetUserId) => {
  const cResult = targetUserId(568).c(14);
  targetUserId = targetUserId.targetUserId;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    const fn = function u() {
      currentUser = currentUser.getCurrentUser();
      let id;
      if (currentUser != null) {
        id = currentUser.id;
      }
      return id;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const obj = targetUserId(568);
  const stateFromStores = targetUserId(504).useStateFromStores(tmp4, tmp5);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [UserStore];
    cResult[2] = items1;
    let tmp8 = items1;
  } else {
    tmp8 = cResult[2];
  }
  if (cResult[3] !== targetUserId) {
    const fn2 = function v() {
      let tmp2;
      if (null != targetUserId) {
        const user = UserStore.getUser(tmp);
        let username;
        if (user != null) {
          username = user.username;
        }
        tmp2 = username;
      }
      return tmp2;
    };
    cResult[3] = targetUserId;
    cResult[4] = fn2;
    let tmp10 = fn2;
  } else {
    tmp10 = cResult[4];
  }
  const tmpResult = targetUserId(504);
  const stateFromStores1 = targetUserId(504).useStateFromStores(tmp8, tmp10);
  if (cResult[5] === (null != targetUserId && targetUserId !== stateFromStores)) {
    if (cResult[6] === stateFromStores1) {
      const _Symbol = Symbol;
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        const headerCloseButton = tmp(5839).getHeaderCloseButton(tmp(11448).closeBadgeDirectoryScreen);
        cResult[8] = headerCloseButton;
        let tmp16 = headerCloseButton;
        const tmpResult4 = tmp(5839);
      } else {
        tmp16 = cResult[8];
      }
      if (cResult[9] === targetUserId) {
        if (cResult[10] === tmp13) {
          let tmp18 = cResult[11];
        }
        if (cResult[12] !== tmp18) {
          const obj2 = { screens: tmp18, initialRouteName };
          const tmp23 = jsx(tmp(11453).Modal, { screens: tmp18, initialRouteName });
          cResult[12] = tmp18;
          cResult[13] = tmp23;
          let tmp20 = tmp23;
        } else {
          tmp20 = cResult[13];
        }
        return tmp20;
      }
      const obj3 = {};
      const obj4 = {
        title: cResult[7],
        headerLeft: tmp16,
        render() {
              return jsx(BadgeDirectoryViewDefault, { targetUserId });
            }
      };
      obj3[initialRouteName] = obj4;
      cResult[9] = targetUserId;
      cResult[10] = cResult[7];
      cResult[11] = obj3;
      tmp18 = obj3;
    }
  }
  if (!(null != targetUserId && targetUserId !== stateFromStores)) {
    const intl = tmp(1119).intl;
    let stringResult = intl.string(tmp(1119).t.UqnlQF);
    cResult[5] = tmp12;
    cResult[6] = stateFromStores1;
    cResult[7] = stringResult;
  }
  const intl2 = tmp(1119).intl;
  stringResult = intl2.formatToPlainString(tmp(1119).t.EIcwoe, { username: stateFromStores1 });
}) : ((targetUserId) => {
  targetUserId = targetUserId.targetUserId;
  c1 = undefined;
  const items = [UserStore];
  const stateFromStores = targetUserId(504).useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    let id;
    if (currentUser != null) {
      id = currentUser.id;
    }
    return id;
  });
  let obj = targetUserId(504);
  const items1 = [UserStore];
  const stateFromStores1 = targetUserId(504).useStateFromStores(items1, () => {
    let tmp2;
    if (null != targetUserId) {
      const user = UserStore.getUser(tmp);
      let username;
      if (user != null) {
        username = user.username;
      }
      tmp2 = username;
    }
    return tmp2;
  });
  if (null != targetUserId) {
    if (targetUserId !== stateFromStores) {
      if (null != stateFromStores1) {
        const intl2 = tmp(1119).intl;
        const obj3 = { username: stateFromStores1 };
        let formatToPlainStringResult = intl2.formatToPlainString(tmp(1119).t.EIcwoe, obj3);
      }
      c1 = formatToPlainStringResult;
      const items2 = [formatToPlainStringResult, targetUserId];
      const memo = noop.useMemo(() => {
        const obj = {};
        const obj2 = {
          title,
          headerLeft: NavigatorHeader.getHeaderCloseButton(openBadgeDirectoryScreen.closeBadgeDirectoryScreen),
          render() {
            return jsx(c1(dependencyMap[9]), { targetUserId });
          }
        };
        obj[c6] = obj2;
        return obj;
      }, items2);
      const obj4 = { screens: memo, initialRouteName };
      return jsx(tmp(11453).Modal, { screens: memo, initialRouteName });
    }
  }
  const intl = tmp(1119).intl;
  formatToPlainStringResult = intl.string(tmp(1119).t.UqnlQF);
});
