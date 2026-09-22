// Module ID: 16204
// Function ID: 16205
// Name: useFavoritesGuildCategoryFullNotice
// Dependencies: [1960, 1970, 1074, 504, 10353, 1982, 1114, 3236, 2]
// Exports: default

// Module 16204 (useFavoritesGuildCategoryFullNotice)
import initialize from "initialize" /* 504 */;
import _modDef3236 from "module_3236" /* 3236 */;
import FavoritesHooks from "FavoritesHooks" /* 10353 */;
import FavoriteStore from "FavoriteStore" /* 1960 */;

require = fn;
let closure_4 = fn(1970).FAVORITES_AUTO_ADDED_THREADS_CATEGORY_NAME;
const ChannelTypes = fn(1074).ChannelTypes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/favorites/hooks/useFavoritesGuildCategoryFullNotice.tsx");

export default function useFavoritesGuildCategoryFullNotice(getGuildId, str) {
  const items = [FavoriteStore];
  const stateFromStores = initialize.useStateFromStores(items, () => autoAddJoinedThreads.autoAddJoinedThreads);
  FavoritesHooks;
  let tmp6 = null;
  if (stateFromStores) {
    tmp6 = null;
    if (tmp5) {
      tmp6 = null;
      if (null != str) {
        tmp6 = null;
        if (tmpResult.isFavoritesGuildId(getGuildId.getGuildId())) {
          tmp6 = null;
          if (getGuildId.type === ChannelTypes.GUILD_CATEGORY) {
            const formatted = str.trim().toLowerCase();
            tmp6 = null;
            if (formatted === closure_4.toLowerCase()) {
              const obj2 = { label: null, tooltip: null };
              const intl = tmp(1114).intl;
              obj2.label = intl.string(_modDef3236.WsUrMD);
              const intl2 = tmp(1114).intl;
              obj2.tooltip = intl2.string(_modDef3236.dW9Kov);
              tmp6 = obj2;
            }
            str = str.trim();
          }
        }
        tmpResult = tmp(1982);
      }
    }
  }
  return tmp6;
};
