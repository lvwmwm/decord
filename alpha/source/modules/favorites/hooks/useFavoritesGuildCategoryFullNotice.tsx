// Module ID: 18531
// Function ID: 18532
// Name: useFavoritesGuildCategoryFullNotice
// Dependencies: [4994, 5004, 1072, 504, 10960, 5016, 1113, 3608, 2]
// Exports: default

// Module 18531 (useFavoritesGuildCategoryFullNotice)
import get_initialized from "get initialized" /* 504 */;
import Constants from "Constants" /* 1072 */;
import _modDef3608 from "module_3608" /* 3608 */;
import FavoritesUtils from "FavoritesUtils" /* 5016 */;
import FavoritesHooks from "FavoritesHooks" /* 10960 */;
import FavoriteStore from "FavoriteStore" /* 4994 */;
import FavoritesConstants from "FavoritesConstants" /* 5004 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
({ FAVORITES_AUTO_ADD_THREADS_OWN_CATEGORY: closure_4, FAVORITES_AUTO_ADDED_THREADS_CATEGORY_NAME: hasOwnProperty } = FavoritesConstants);
const ChannelTypes = Constants.ChannelTypes;
const result = size.fileFinishedImporting("modules/favorites/hooks/useFavoritesGuildCategoryFullNotice.tsx");

export default function useFavoritesGuildCategoryFullNotice(getGuildId, str) {
  let autoAddThreadsMode;
  let intl;
  let intl2;
  const items = [FavoriteStore];
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => autoAddThreadsMode.autoAddThreadsMode === closure_1_4);
  FavoritesHooks;
  let tmp6 = null;
  if (stateFromStores) {
    tmp6 = null;
    if (tmp5) {
      tmp6 = null;
      if (null != str) {
        tmp6 = null;
        const tmpResult = FavoritesUtils;
        if (tmpResult.isFavoritesGuildId(getGuildId.getGuildId())) {
          tmp6 = null;
          if (getGuildId.type === ChannelTypes.GUILD_CATEGORY) {
            str = str.trim();
            const formatted = str.toLowerCase();
            tmp6 = null;
            if (formatted === hasOwnProperty.toLowerCase()) {
              const obj2 = { label: intl.string(_modDef3608.WsUrMD), tooltip: intl2.string(_modDef3608.dW9Kov) };
              intl = tmp(1113).intl;
              intl2 = tmp(1113).intl;
              tmp6 = obj2;
            }
          }
        }
      }
    }
  }
  return tmp6;
};
