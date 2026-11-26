// Module ID: 6127
// Function ID: 6128
// Name: useGuildIdForChannelRoute
// Dependencies: [4895, 5076, 1071, 504, 4917, 2]
// Exports: default, getGuildIdForGenericRedirect

// Module 6127 (useGuildIdForChannelRoute)
import get_initialized from "get initialized" /* 504 */;
import Constants from "Constants" /* 1071 */;
import FavoritesUtils from "FavoritesUtils" /* 4917 */;
import FavoriteStore from "FavoriteStore" /* 4895 */;
import SelectedGuildStore from "SelectedGuildStore" /* 5076 */;
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
