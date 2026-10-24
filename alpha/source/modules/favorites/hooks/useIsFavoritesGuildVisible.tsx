// Module ID: 16679
// Function ID: 16680
// Name: useIsFavoritesGuildVisible
// Dependencies: [5002, 4826, 4848, 558, 576, 504, 2]
// Exports: isFavoritesGuildVisible

// Module 16679 (useIsFavoritesGuildVisible)
import FavoritesUtils from "FavoritesUtils" /* 4848 */;
import SelectedGuildStore from "SelectedGuildStore" /* 5002 */;
import FavoriteStore from "FavoriteStore" /* 4826 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useIsFavoritesGuildVisible(arg0) {
  let closure_0;
  let first;
  let tmp8;
  let tmp9;
  let tmp = _require;
  let tmp2 = dependencyMap;
  let obj = require("react");
  const cResult = obj.c(4);
  _require = tmp4;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [FavoriteStore, SelectedGuildStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== (undefined === arg0 || arg0)) {
    const fn = function l() {
      let tmp2 = !closure_0;
      const obj = SelectedGuildStore;
      const tmp = FavoriteStore;
      if (closure_0) {
        const obj2 = FavoritesUtils;
        tmp2 = !obj2.isFavoritesGuildId(obj.getGuildId());
      }
      let favoriteGuildEnabled = !tmp2;
      if (tmp2) {
        favoriteGuildEnabled = tmp.favoriteGuildEnabled;
      }
      return favoriteGuildEnabled;
    };
    const items1 = [tmp4];
    cResult[1] = undefined === arg0 || arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp9 = items1;
    tmp8 = fn;
  } else {
    tmp8 = cResult[2];
    tmp9 = cResult[3];
  }
  const tmpResult = tmp(504);
  return tmpResult.useStateFromStores(first, tmp8, tmp9);
}) : (function useIsFavoritesGuildVisible() {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = true;
  }
  let obj = flag(504);
  const items = [FavoriteStore, SelectedGuildStore];
  const items1 = [flag];
  return obj.useStateFromStores(items, () => {
    let tmp2 = !flag;
    const obj = SelectedGuildStore;
    const tmp = FavoriteStore;
    if (flag) {
      const obj2 = FavoritesUtils;
      tmp2 = !obj2.isFavoritesGuildId(obj.getGuildId());
    }
    let favoriteGuildEnabled = !tmp2;
    if (tmp2) {
      favoriteGuildEnabled = tmp.favoriteGuildEnabled;
    }
    return favoriteGuildEnabled;
  }, items1);
});
const result = size.fileFinishedImporting("modules/favorites/hooks/useIsFavoritesGuildVisible.tsx");

export default tmp2;
export const isFavoritesGuildVisible = function isFavoritesGuildVisible() {
  const obj = FavoritesUtils;
  const isFavoritesGuildIdResult = obj.isFavoritesGuildId(SelectedGuildStore.getGuildId());
  let favoriteGuildEnabled = isFavoritesGuildIdResult;
  const tmp = FavoriteStore;
  if (!isFavoritesGuildIdResult) {
    favoriteGuildEnabled = tmp.favoriteGuildEnabled;
  }
  return favoriteGuildEnabled;
};
