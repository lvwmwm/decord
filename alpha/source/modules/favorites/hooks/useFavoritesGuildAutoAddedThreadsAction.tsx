// Module ID: 18185
// Function ID: 18186
// Name: useFavoritesGuildAutoAddedThreadsAction
// Dependencies: [19, 1383, 4866, 504, 10831, 1113, 3450, 2]
// Exports: default

// Module 18185 (useFavoritesGuildAutoAddedThreadsAction)
import FavoritesActionCreators from "FavoritesActionCreators" /* 10831 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1383 */;
import FavoriteStore from "FavoriteStore" /* 4866 */;
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
  const obj3 = { isAvailable: stateFromStores, isEnabled: stateFromStores1, label: intl.string(stateFromStores1(3450).DIyQIF), subLabel: intl2.string(stateFromStores1(3450).g2vHYJ), toggle: callback };
  callback = react.useCallback(() => {
    const tmp = stateFromStores;
    if (tmp) {
      const obj = FavoritesActionCreators;
      const result = obj.setFavoritesAutoAddJoinedThreads(!stateFromStores1);
    }
  }, items2);
  intl = stateFromStores(1113).intl;
  intl2 = stateFromStores(1113).intl;
  return obj3;
};
