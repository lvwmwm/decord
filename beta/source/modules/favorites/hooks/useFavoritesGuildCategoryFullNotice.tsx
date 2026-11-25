// Module ID: 17637
// Function ID: 17638
// Name: useFavoritesGuildCategoryFullNotice
// Dependencies: [4765, 4775, 1071, 504, 11225, 4787, 1112, 3802, 2]
// Exports: default

// Module 17637 (useFavoritesGuildCategoryFullNotice)
import get_initialized from "get initialized" /* 504 */;
import Constants from "Constants" /* 1071 */;
import _modDef3802 from "module_3802" /* 3802 */;
import FavoritesUtils from "FavoritesUtils" /* 4787 */;
import FavoritesHooks from "FavoritesHooks" /* 11225 */;
import FavoriteStore from "FavoriteStore" /* 4765 */;
import FavoritesConstants from "FavoritesConstants" /* 4775 */;
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
              const obj2 = { label: intl.string(_modDef3802.WsUrMD), tooltip: intl2.string(_modDef3802.dW9Kov) };
              intl = tmp(1112).intl;
              intl2 = tmp(1112).intl;
              tmp6 = obj2;
            }
          }
        }
      }
    }
  }
  return tmp6;
};
