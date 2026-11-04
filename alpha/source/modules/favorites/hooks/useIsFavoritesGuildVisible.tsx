// Module ID: 17552
// Function ID: 17553
// Name: useIsFavoritesGuildVisible
// Dependencies: [5172, 4993, 5015, 504, 2]
// Exports: default, isFavoritesGuildVisible

// Module 17552 (useIsFavoritesGuildVisible)
import FavoritesUtils from "FavoritesUtils" /* 5015 */;
import SelectedGuildStore from "SelectedGuildStore" /* 5172 */;
import FavoriteStore from "FavoriteStore" /* 4993 */;
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
