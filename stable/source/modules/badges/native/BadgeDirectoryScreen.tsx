// Module ID: 10645
// Function ID: 10646
// Name: BadgeDirectoryScreen
// Dependencies: [19, 1378, 21, 558, 576, 504, 1127, 5933, 10644, 10646, 10733, 2]

// Module 10645 (BadgeDirectoryScreen)
import Fragment from "Fragment" /* 21 */;
import NavigatorHeader from "NavigatorHeader" /* 5933 */;
import openBadgeDirectoryScreen from "openBadgeDirectoryScreen" /* 10644 */;
import BadgeDirectoryViewDefault from "BadgeDirectoryView" /* 10646 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1378 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let currentUser, targetUserId;

const jsx = Fragment.jsx;
let c6 = "badge-directory";
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((targetUserId) => {
  let tmp10;
  let tmp13;
  let tmp4;
  let tmp5;
  let tmp8;
  const tmp = targetUserId;
  let tmp2 = dependencyMap;
  const obj = targetUserId(576);
  const cResult = obj.c(14);
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
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [UserStore];
    cResult[2] = items1;
    tmp8 = items1;
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
    tmp10 = fn2;
  } else {
    tmp10 = cResult[4];
  }
  const tmpResult3 = tmp(504);
  const stateFromStores1 = tmpResult3.useStateFromStores(tmp8, tmp10);
  if (cResult[5] === (null != targetUserId && targetUserId !== stateFromStores)) {
    let tmp15;
    if (cResult[6] === stateFromStores1) {
      tmp13 = cResult[7];
    }
    const _Symbol = Symbol;
    if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
      const tmpResult4 = tmp(5933);
      const headerCloseButton = tmpResult4.getHeaderCloseButton(tmp(10644).closeBadgeDirectoryScreen);
      cResult[8] = headerCloseButton;
      tmp15 = headerCloseButton;
    } else {
      tmp15 = cResult[8];
    }
    if (cResult[9] === targetUserId) {
      let tmp17;
      let tmp19;
      if (cResult[10] === tmp13) {
        tmp17 = cResult[11];
      }
      if (cResult[12] !== tmp17) {
        const tmp22 = jsx(tmp(10733).Modal, { screens: tmp17, initialRouteName });
        cResult[12] = tmp17;
        cResult[13] = tmp22;
        tmp19 = tmp22;
      } else {
        tmp19 = cResult[13];
      }
      return tmp19;
    }
    const obj3 = {};
    const obj4 = {
      title: tmp13,
      headerLeft: tmp15,
      render() {
          return jsx(BadgeDirectoryViewDefault, { targetUserId });
        }
    };
    obj3[initialRouteName] = obj4;
    cResult[9] = targetUserId;
    cResult[10] = tmp13;
    cResult[11] = obj3;
    tmp17 = obj3;
  }
  if (null != targetUserId && targetUserId !== stateFromStores) {
    let formatToPlainStringResult;
    if (null != stateFromStores1) {
      const intl2 = tmp(1127).intl;
      const obj5 = { username: stateFromStores1 };
      formatToPlainStringResult = intl2.formatToPlainString(tmp(1127).t.EIcwoe, obj5);
    }
    cResult[5] = null != targetUserId && targetUserId !== stateFromStores;
    cResult[6] = stateFromStores1;
    cResult[7] = formatToPlainStringResult;
    tmp13 = formatToPlainStringResult;
  }
  const intl = tmp(1127).intl;
  formatToPlainStringResult = intl.string(tmp(1127).t.UqnlQF);
}) : ((targetUserId) => {
  let title;
  targetUserId = targetUserId.targetUserId;
  let c1;
  const tmp = targetUserId;
  let tmp2 = dependencyMap;
  let obj = targetUserId(504);
  const items = [UserStore];
  const stateFromStores = obj.useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    let id;
    if (currentUser != null) {
      id = currentUser.id;
    }
    return id;
  });
  let obj2 = targetUserId(504);
  const items1 = [UserStore];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => {
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
      let formatToPlainStringResult;
      if (null != stateFromStores1) {
        const intl2 = tmp(1127).intl;
        let obj3 = { username: stateFromStores1 };
        formatToPlainStringResult = intl2.formatToPlainString(tmp(1127).t.EIcwoe, obj3);
      }
      c1 = formatToPlainStringResult;
      const items2 = [formatToPlainStringResult, targetUserId];
      const memo = react.useMemo(() => {
        let obj3;
        const obj = {};
        const obj2 = {
          title,
          headerLeft: obj3.getHeaderCloseButton(openBadgeDirectoryScreen.closeBadgeDirectoryScreen),
          render() {
            return jsx(c1(dependencyMap[9]), { targetUserId });
          }
        };
        obj[c6] = obj2;
        obj3 = NavigatorHeader;
        return obj;
      }, items2);
      return jsx(tmp(10733).Modal, { screens: memo, initialRouteName });
    }
  }
  const intl = tmp(1127).intl;
  formatToPlainStringResult = intl.string(tmp(1127).t.UqnlQF);
});
const result = size.fileFinishedImporting("modules/badges/native/BadgeDirectoryScreen.tsx");

export default tmp2;
