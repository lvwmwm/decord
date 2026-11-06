// Module ID: 18442
// Function ID: 18443
// Name: useFavoritesGuildCategoryFullNotice
// Dependencies: [5022, 5032, 1072, 504, 10968, 5044, 1113, 3606, 2]
// Exports: default

// Module 18442 (useFavoritesGuildCategoryFullNotice)
import get_initialized from "get initialized" /* 504 */;
import Constants from "Constants" /* 1072 */;
import _modDef3606 from "module_3606" /* 3606 */;
import FavoritesConstants from "FavoritesConstants" /* 5032 */;
import FavoritesUtils from "FavoritesUtils" /* 5044 */;
import FavoritesHooks from "FavoritesHooks" /* 10968 */;
import FavoriteStore from "FavoriteStore" /* 5022 */;
import size from "module_2" /* 2 */;

let closure_4 = FavoritesConstants.FAVORITES_AUTO_ADDED_THREADS_CATEGORY_NAME;
const ChannelTypes = Constants.ChannelTypes;
const result = size.fileFinishedImporting("modules/favorites/hooks/useFavoritesGuildCategoryFullNotice.tsx");

export default function useFavoritesGuildCategoryFullNotice(getGuildId, str) {
  let autoAddJoinedThreads;
  let intl;
  let intl2;
  const items = [FavoriteStore];
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => autoAddJoinedThreads.autoAddJoinedThreads);
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
            if (formatted === closure_4.toLowerCase()) {
              const obj2 = { label: intl.string(_modDef3606.WsUrMD), tooltip: intl2.string(_modDef3606.dW9Kov) };
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
