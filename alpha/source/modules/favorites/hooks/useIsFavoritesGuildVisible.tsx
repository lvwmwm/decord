// Module ID: 17989
// Function ID: 17990
// Name: useIsFavoritesGuildVisible
// Dependencies: [5343, 5162, 5184, 504, 2]
// Exports: default, isFavoritesGuildVisible

// Module 17989 (useIsFavoritesGuildVisible)
import FavoritesUtils from "FavoritesUtils" /* 5184 */;
import SelectedGuildStore from "SelectedGuildStore" /* 5343 */;
import FavoriteStore from "FavoriteStore" /* 5162 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/favorites/hooks/useIsFavoritesGuildVisible.tsx");

export default function useIsFavoritesGuildVisible() {
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
};
export function isFavoritesGuildVisible() {
  const obj = FavoritesUtils;
  const isFavoritesGuildIdResult = obj.isFavoritesGuildId(SelectedGuildStore.getGuildId());
  let favoriteGuildEnabled = isFavoritesGuildIdResult;
  const tmp = FavoriteStore;
  if (!isFavoritesGuildIdResult) {
    favoriteGuildEnabled = tmp.favoriteGuildEnabled;
  }
  return favoriteGuildEnabled;
}
