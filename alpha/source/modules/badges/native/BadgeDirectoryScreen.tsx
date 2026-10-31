// Module ID: 11456
// Function ID: 11457
// Name: BadgeDirectoryScreen
// Dependencies: [19, 1383, 21, 5014, 5586, 575, 504, 1113, 6998, 11455, 11457, 7169, 11481, 2]
// Exports: default

// Module 11456 (BadgeDirectoryScreen)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import NavigatorConstants from "NavigatorConstants" /* 5586 */;
import NavigatorHeader from "NavigatorHeader" /* 6998 */;
import openBadgeDirectoryScreen from "openBadgeDirectoryScreen" /* 11455 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1383 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let currentUser, dependencyMap;

let obj2;
let obj3;
const jsx = Fragment.jsx;
let c6 = "badge-directory";
let createStyles = createStyles_mod;
let obj = { sheetHeader: obj2, view: obj3 };
obj2 = { height: NavigatorConstants.NAV_BAR_HEIGHT };
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
let closure_7 = createStyles(obj);
const result = size.fileFinishedImporting("modules/badges/native/BadgeDirectoryScreen.tsx");

export default function BadgeDirectoryScreen(targetUserId) {
  let title;
  targetUserId = targetUserId.targetUserId;
  dependencyMap = undefined;
  const tmp = closure_7();
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
    if (null != targetUserId) {
      const user = UserStore.getUser(tmp);
      let globalName;
      if (user != null) {
        globalName = user.globalName;
      }
      if (globalName == null) {
        let username;
        if (user != null) {
          username = user.username;
        }
        globalName = username;
      }
      return globalName;
    }
  });
  if (null != targetUserId) {
    if (targetUserId !== stateFromStores) {
      let formatToPlainStringResult;
      let tmp9Result;
      if (null != stateFromStores1) {
        const intl2 = tmp2(1113).intl;
        let obj3 = { username: stateFromStores1 };
        formatToPlainStringResult = intl2.formatToPlainString(tmp2(1113).t.EIcwoe, obj3);
      }
      dependencyMap = formatToPlainStringResult;
      const items2 = [formatToPlainStringResult, targetUserId, stateFromStores1];
      const memo = react.useMemo(() => {
        let obj3;
        let targetUsername;
        const obj = {};
        const obj2 = {
          title,
          headerLeft: obj3.getHeaderCloseButton(openBadgeDirectoryScreen.closeBadgeDirectoryScreen),
          render() {
            return jsx(stateFromStores1(c2[10]), { targetUserId, targetUsername });
          }
        };
        obj[c6] = obj2;
        obj3 = NavigatorHeader;
        return obj;
      }, items2);
      const tmp2Result = targetUserId(11455);
      if (tmp2Result.isBadgeDirectoryIOSPageSheet()) {
        const obj4 = { screens: memo, initialRouteName, headerStatusBarHeight: 0, headerStyle: null, viewStyle: null };
        ({ sheetHeader: obj6.headerStyle, view: obj6.viewStyle } = tmp);
        tmp9Result = tmp9(tmp2(7169).Navigator, obj4);
      } else {
        const obj5 = { screens: memo, initialRouteName, viewStyle: tmp.view };
        tmp9Result = tmp9(tmp2(11481).Modal, obj5);
      }
      return tmp9Result;
    }
  }
  const intl = tmp2(1113).intl;
  formatToPlainStringResult = intl.string(tmp2(1113).t.UqnlQF);
};
