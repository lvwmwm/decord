// Module ID: 10656
// Function ID: 10657
// Name: BadgeDirectoryScreen
// Dependencies: [19, 1372, 21, 504, 1115, 5936, 10655, 10657, 10769, 2]
// Exports: default

// Module 10656 (BadgeDirectoryScreen)
import Fragment from "Fragment" /* 21 */;
import NavigatorHeader from "NavigatorHeader" /* 5936 */;
import openBadgeDirectoryScreen from "openBadgeDirectoryScreen" /* 10655 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1372 */;
import size from "module_2" /* 2 */;

let currentUser;

const jsx = Fragment.jsx;
let c6 = "badge-directory";
const result = size.fileFinishedImporting("modules/badges/native/BadgeDirectoryScreen.tsx");

export default function BadgeDirectoryScreen(targetUserId) {
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
        const intl2 = tmp(1115).intl;
        let obj3 = { username: stateFromStores1 };
        formatToPlainStringResult = intl2.formatToPlainString(tmp(1115).t.EIcwoe, obj3);
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
            return jsx(c1(dependencyMap[7]), { targetUserId });
          }
        };
        obj[c6] = obj2;
        obj3 = NavigatorHeader;
        return obj;
      }, items2);
      return jsx(tmp(10769).Modal, { screens: memo, initialRouteName });
    }
  }
  const intl = tmp(1115).intl;
  formatToPlainStringResult = intl.string(tmp(1115).t.UqnlQF);
};
