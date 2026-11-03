// Module ID: 18345
// Function ID: 18346
// Name: useFavoritesGuildCategories
// Dependencies: [4993, 504, 10962, 2]
// Exports: default

// Module 18345 (useFavoritesGuildCategories)
import get_initialized from "get initialized" /* 504 */;
import FavoritesHooks from "FavoritesHooks" /* 10962 */;
import FavoriteStore from "FavoriteStore" /* 4993 */;
import size from "module_2" /* 2 */;

function areCategoriesEqual(arr, arg1) {
  let closure_0 = arg1;
  const tmp = arr.length === arg1.length && arr.every((id, index) => id.id === closure_0[index].id && id.name === tmp[index].name);
  return tmp;
}
const result = size.fileFinishedImporting("modules/favorites/hooks/useFavoritesGuildCategories.tsx");

export default function useFavoritesGuildCategories() {
  let favoriteChannels;
  let obj = get_initialized;
  const items = [FavoriteStore];
  return obj.useStateFromStores(items, () => {
    const obj = FavoritesHooks;
    return obj.getFavoritesCategories(favoriteChannels.getFavoriteChannels());
  }, [], areCategoriesEqual);
};
