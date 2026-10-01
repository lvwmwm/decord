// Module ID: 15739
// Function ID: 15740
// Name: useFavoritesGuildCategoryFullNotice
// Dependencies: [2048, 2058, 1074, 504, 9685, 2070, 1115, 3361, 2]
// Exports: default

// Module 15739 (useFavoritesGuildCategoryFullNotice)
import get_initialized from "get initialized" /* 504 */;
import Constants from "Constants" /* 1074 */;
import FavoritesConstants from "FavoritesConstants" /* 2058 */;
import FavoritesUtils from "FavoritesUtils" /* 2070 */;
import _modDef3361 from "module_3361" /* 3361 */;
import FavoritesHooks from "FavoritesHooks" /* 9685 */;
import FavoriteStore from "FavoriteStore" /* 2048 */;
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
              const obj2 = { label: intl.string(_modDef3361.WsUrMD), tooltip: intl2.string(_modDef3361.dW9Kov) };
              intl = tmp(1115).intl;
              intl2 = tmp(1115).intl;
              tmp6 = obj2;
            }
          }
        }
      }
    }
  }
  return tmp6;
};
