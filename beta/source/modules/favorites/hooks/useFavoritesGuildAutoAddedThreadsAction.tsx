// Module ID: 15772
// Function ID: 15773
// Name: useFavoritesGuildAutoAddedThreadsAction
// Dependencies: [19, 1372, 2048, 9685, 504, 9684, 1115, 3361, 2]
// Exports: default

// Module 15772 (useFavoritesGuildAutoAddedThreadsAction)
import FavoritesActionCreators from "FavoritesActionCreators" /* 9684 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1372 */;
import FavoriteStore from "FavoriteStore" /* 2048 */;
import size from "module_2" /* 2 */;

let currentUser;

let result = size.fileFinishedImporting("modules/favorites/hooks/useFavoritesGuildAutoAddedThreadsAction.tsx");

export default function useFavoritesGuildAutoAddedThreadsAction() {
  let autoAddJoinedThreads;
  let callback;
  let hasAccess;
  let intl;
  let intl2;
  let tmp = hasAccess;
  let obj = hasAccess(9685);
  hasAccess = obj.useFavoritesAccess("useFavoritesGuildAutoAddedThreadsAction").hasAccess;
  const items = [UserStore];
  const obj2 = hasAccess(504);
  if (hasAccess) {
    hasAccess = obj2.useStateFromStores(items, () => {
      currentUser = currentUser.getCurrentUser();
      let flag;
      if (currentUser != null) {
        flag = currentUser.isStaff();
      }
      if (flag == null) {
        flag = false;
      }
      return flag;
    });
  }
  const items1 = [FavoriteStore];
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(items1, () => autoAddJoinedThreads.autoAddJoinedThreads);
  const items2 = [hasAccess, stateFromStores];
  const obj3 = { isAvailable: hasAccess, isEnabled: stateFromStores, label: intl.string(stateFromStores(3361).DIyQIF), subLabel: intl2.string(stateFromStores(3361).g2vHYJ), toggle: callback };
  callback = react.useCallback(() => {
    const tmp = hasAccess;
    if (tmp) {
      const obj = FavoritesActionCreators;
      const result = obj.setFavoritesAutoAddJoinedThreads(!stateFromStores);
    }
  }, items2);
  intl = tmp(1115).intl;
  intl2 = tmp(1115).intl;
  return obj3;
};
