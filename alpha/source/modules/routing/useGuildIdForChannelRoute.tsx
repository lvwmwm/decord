// Module ID: 5894
// Function ID: 5895
// Name: useGuildIdForChannelRoute
// Dependencies: [4995, 5174, 1072, 504, 5017, 2]
// Exports: default, getGuildIdForGenericRedirect

// Module 5894 (useGuildIdForChannelRoute)
import get_initialized from "get initialized" /* 504 */;
import Constants from "Constants" /* 1072 */;
import FavoritesUtils from "FavoritesUtils" /* 5017 */;
import FavoriteStore from "FavoriteStore" /* 4995 */;
import SelectedGuildStore from "SelectedGuildStore" /* 5174 */;
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
