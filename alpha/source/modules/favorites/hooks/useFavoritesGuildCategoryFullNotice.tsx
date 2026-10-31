// Module ID: 18152
// Function ID: 18153
// Name: useFavoritesGuildCategoryFullNotice
// Dependencies: [4866, 4876, 1072, 504, 10832, 4888, 1113, 3450, 2]
// Exports: default

// Module 18152 (useFavoritesGuildCategoryFullNotice)
import get_initialized from "get initialized" /* 504 */;
import Constants from "Constants" /* 1072 */;
import _modDef3450 from "module_3450" /* 3450 */;
import FavoritesConstants from "FavoritesConstants" /* 4876 */;
import FavoritesUtils from "FavoritesUtils" /* 4888 */;
import FavoritesHooks from "FavoritesHooks" /* 10832 */;
import FavoriteStore from "FavoriteStore" /* 4866 */;
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
              const obj2 = { label: intl.string(_modDef3450.WsUrMD), tooltip: intl2.string(_modDef3450.dW9Kov) };
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
