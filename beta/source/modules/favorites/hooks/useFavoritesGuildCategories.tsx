// Module ID: 10497
// Function ID: 10498
// Name: useFavoritesGuildCategories
// Dependencies: [2054, 558, 576, 9807, 504, 2]

// Module 10497 (useFavoritesGuildCategories)
import react from "react" /* 576 */;
import FavoritesHooks from "FavoritesHooks" /* 9807 */;
import FavoriteStore from "FavoriteStore" /* 2054 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let tmp;
const get_initialized = tmp(504);
function areCategoriesEqual(arr, arg1) {
  let closure_0 = arg1;
  const tmp = arr.length === arg1.length && arr.every((id, index) => id.id === closure_0[index].id && id.name === tmp[index].name);
  return tmp;
}
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let favoriteChannels;
  let tmp4;
  let tmp5;
  let tmp6;
  let obj = react;
  const cResult = obj.c(3);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [FavoriteStore];
    const fn = function s() {
      const obj = FavoritesHooks;
      return obj.getFavoritesCategories(favoriteChannels.getFavoriteChannels());
    };
    const items1 = [];
    cResult[0] = items;
    cResult[1] = fn;
    cResult[2] = items1;
    tmp4 = items;
    tmp5 = fn;
    tmp6 = items1;
  } else {
    [tmp4, tmp5, tmp6] = cResult;
  }
  const tmpResult = get_initialized;
  return tmpResult.useStateFromStores(tmp4, tmp5, tmp6, areCategoriesEqual);
}) : (() => {
  let favoriteChannels;
  let obj = get_initialized;
  const items = [FavoriteStore];
  return obj.useStateFromStores(items, () => {
    const obj = FavoritesHooks;
    return obj.getFavoritesCategories(favoriteChannels.getFavoriteChannels());
  }, [], areCategoriesEqual);
});
const result = size.fileFinishedImporting("modules/favorites/hooks/useFavoritesGuildCategories.tsx");

export default tmp2;
