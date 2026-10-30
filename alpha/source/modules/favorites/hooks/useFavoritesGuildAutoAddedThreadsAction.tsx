// Module ID: 18142
// Function ID: 18143
// Name: useFavoritesGuildAutoAddedThreadsAction
// Dependencies: [19, 1384, 4861, 504, 10811, 1114, 3447, 2]
// Exports: default

// Module 18142 (useFavoritesGuildAutoAddedThreadsAction)
import FavoritesActionCreators from "FavoritesActionCreators" /* 10811 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1384 */;
import FavoriteStore from "FavoriteStore" /* 4861 */;
import size from "module_2" /* 2 */;

let currentUser;

let result = size.fileFinishedImporting("modules/favorites/hooks/useFavoritesGuildAutoAddedThreadsAction.tsx");

export default function useFavoritesGuildAutoAddedThreadsAction() {
  let autoAddJoinedThreads;
  let callback;
  let intl;
  let intl2;
  let stateFromStores;
  let obj = stateFromStores(504);
  const items = [UserStore];
  stateFromStores = obj.useStateFromStores(items, () => {
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
  const items1 = [FavoriteStore];
  const obj2 = stateFromStores(504);
  const stateFromStores1 = obj2.useStateFromStores(items1, () => autoAddJoinedThreads.autoAddJoinedThreads);
  const items2 = [stateFromStores, stateFromStores1];
  const obj3 = { isAvailable: stateFromStores, isEnabled: stateFromStores1, label: intl.string(stateFromStores1(3447).DIyQIF), subLabel: intl2.string(stateFromStores1(3447).g2vHYJ), toggle: callback };
  callback = react.useCallback(() => {
    const tmp = stateFromStores;
    if (tmp) {
      const obj = FavoritesActionCreators;
      const result = obj.setFavoritesAutoAddJoinedThreads(!stateFromStores1);
    }
  }, items2);
  intl = stateFromStores(1114).intl;
  intl2 = stateFromStores(1114).intl;
  return obj3;
};
