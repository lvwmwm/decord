// Module ID: 17530
// Function ID: 17531
// Name: useFavoritesGuildAutoAddedThreadsAction
// Dependencies: [19, 1392, 4824, 558, 576, 504, 10840, 1128, 3412, 2]

// Module 17530 (useFavoritesGuildAutoAddedThreadsAction)
import FavoritesActionCreators from "FavoritesActionCreators" /* 10840 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1392 */;
import FavoriteStore from "FavoriteStore" /* 4824 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let currentUser;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useFavoritesGuildAutoAddedThreadsAction() {
  let autoAddJoinedThreads;
  let stateFromStores;
  let tmp4;
  let tmp5;
  let tmp8;
  let tmp9;
  let tmp = stateFromStores;
  let obj = stateFromStores(576);
  const cResult = obj.c(13);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    const fn = function n() {
      currentUser = currentUser.getCurrentUser();
      let flag;
      if (currentUser != null) {
        flag = currentUser.isStaff();
      }
      if (flag == null) {
        flag = false;
      }
      return flag;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = tmp(504);
  stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [FavoriteStore];
    const fn2 = function c() {
      return autoAddJoinedThreads.autoAddJoinedThreads;
    };
    cResult[2] = items1;
    cResult[3] = fn2;
    tmp9 = fn2;
    tmp8 = items1;
  } else {
    tmp8 = cResult[2];
    tmp9 = cResult[3];
  }
  const tmpResult2 = tmp(504);
  const stateFromStores1 = tmpResult2.useStateFromStores(tmp8, tmp9);
  if (cResult[4] === stateFromStores) {
    let tmp12;
    let tmp14;
    let tmp13;
    if (cResult[5] === stateFromStores1) {
      tmp12 = cResult[6];
    }
    const _Symbol = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = tmp(1128).intl;
      const stringResult = intl.string(stateFromStores1(3412).DIyQIF);
      const intl2 = tmp(1128).intl;
      const stringResult1 = intl2.string(stateFromStores1(3412).g2vHYJ);
      cResult[7] = stringResult;
      cResult[8] = stringResult1;
      tmp14 = stringResult1;
      tmp13 = stringResult;
    } else {
      tmp13 = cResult[7];
      tmp14 = cResult[8];
    }
    if (cResult[9] === stateFromStores) {
      if (cResult[10] === stateFromStores1) {
        let tmp18;
        if (cResult[11] === tmp12) {
          tmp18 = cResult[12];
        }
        return tmp18;
      }
    }
    const obj2 = { isAvailable: stateFromStores, isEnabled: stateFromStores1, label: tmp13, subLabel: tmp14, toggle: tmp12 };
    cResult[9] = stateFromStores;
    cResult[10] = stateFromStores1;
    cResult[11] = tmp12;
    cResult[12] = obj2;
    tmp18 = obj2;
  }
  class A {
    constructor() {
      const tmp = stateFromStores;
      if (tmp) {
        const obj = FavoritesActionCreators;
        const result = obj.setFavoritesAutoAddJoinedThreads(!stateFromStores1);
      }
    }
  }
  cResult[4] = stateFromStores;
  cResult[5] = stateFromStores1;
  cResult[6] = A;
  tmp12 = A;
}) : (function useFavoritesGuildAutoAddedThreadsAction() {
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
  const obj3 = { isAvailable: stateFromStores, isEnabled: stateFromStores1, label: intl.string(stateFromStores1(3412).DIyQIF), subLabel: intl2.string(stateFromStores1(3412).g2vHYJ), toggle: callback };
  callback = react.useCallback(() => {
    const tmp = stateFromStores;
    if (tmp) {
      const obj = FavoritesActionCreators;
      const result = obj.setFavoritesAutoAddJoinedThreads(!stateFromStores1);
    }
  }, items2);
  intl = stateFromStores(1128).intl;
  intl2 = stateFromStores(1128).intl;
  return obj3;
});
let result = size.fileFinishedImporting("modules/favorites/hooks/useFavoritesGuildAutoAddedThreadsAction.tsx");

export default tmp2;
