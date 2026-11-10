// Module ID: 5888
// Function ID: 5889
// Name: useGuildIdForChannelRoute
// Dependencies: [4994, 5173, 1072, 504, 5016, 2]
// Exports: default, getGuildIdForGenericRedirect

// Module 5888 (useGuildIdForChannelRoute)
import get_initialized from "get initialized" /* 504 */;
import Constants from "Constants" /* 1072 */;
import FavoritesUtils from "FavoritesUtils" /* 5016 */;
import FavoriteStore from "FavoriteStore" /* 4994 */;
import SelectedGuildStore from "SelectedGuildStore" /* 5173 */;
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
