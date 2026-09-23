// Module ID: 16509
// Function ID: 16510
// Name: useFavoritesGuildCategoryFullNotice
// Dependencies: [2045, 2055, 1074, 504, 10567, 2067, 1115, 3358, 2]
// Exports: default

// Module 16509 (useFavoritesGuildCategoryFullNotice)
import initialize from "initialize" /* 504 */;
import _modDef3358 from "module_3358" /* 3358 */;
import FavoritesHooks from "FavoritesHooks" /* 10567 */;
import FavoriteStore from "FavoriteStore" /* 2045 */;

require = fn;
let closure_4 = fn(2055).FAVORITES_AUTO_ADDED_THREADS_CATEGORY_NAME;
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
              const intl = tmp(1115).intl;
              obj2.label = intl.string(_modDef3358.WsUrMD);
              const intl2 = tmp(1115).intl;
              obj2.tooltip = intl2.string(_modDef3358.dW9Kov);
              tmp6 = obj2;
            }
            str = str.trim();
          }
        }
        tmpResult = tmp(2067);
      }
    }
  }
  return tmp6;
};
