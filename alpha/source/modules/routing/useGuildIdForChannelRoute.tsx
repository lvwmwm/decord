// Module ID: 6001
// Function ID: 6002
// Name: useGuildIdForChannelRoute
// Dependencies: [4769, 4950, 1071, 504, 4791, 2]
// Exports: default, getGuildIdForGenericRedirect

// Module 6001 (useGuildIdForChannelRoute)
import get_initialized from "get initialized" /* 504 */;
import Constants from "Constants" /* 1071 */;
import FavoritesUtils from "FavoritesUtils" /* 4791 */;
import FavoriteStore from "FavoriteStore" /* 4769 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4950 */;
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
