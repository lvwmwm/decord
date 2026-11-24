// Module ID: 5647
// Function ID: 5648
// Name: useGuildIdForChannelRoute
// Dependencies: [4765, 4946, 1071, 504, 4787, 2]
// Exports: default, getGuildIdForGenericRedirect

// Module 5647 (useGuildIdForChannelRoute)
import get_initialized from "get initialized" /* 504 */;
import Constants from "Constants" /* 1071 */;
import FavoritesUtils from "FavoritesUtils" /* 4787 */;
import FavoriteStore from "FavoriteStore" /* 4765 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4946 */;
import size from "module_2" /* 2 */;

const FAVORITES = Constants.FAVORITES;
const result = size.fileFinishedImporting("modules/routing/useGuildIdForChannelRoute.tsx");

export default function useGuildIdForChannelRoute(getGuildId) {
  let guildId;
  const items = [SelectedGuildStore];
  const obj = get_initialized;
  let stateFromStores = obj.useStateFromStores(items, () => guildId.getGuildId());
  if (null == stateFromStores) {
    stateFromStores = getGuildId.getGuildId();
  }
  return stateFromStores;
};
export function getGuildIdForGenericRedirect(channel) {
  let guildId;
  const obj = FavoritesUtils;
  if (!obj.isFavoritesGuildId(SelectedGuildStore.getGuildId())) {
    guildId = channel.getGuildId();
  } else if (FavoriteStore.isFavorite(channel.id)) {
    guildId = FAVORITES;
  }
  return guildId;
}
