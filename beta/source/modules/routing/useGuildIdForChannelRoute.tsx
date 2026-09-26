// Module ID: 4800
// Function ID: 4801
// Name: useGuildIdForChannelRoute
// Dependencies: [2044, 4609, 1074, 504, 2066, 2]
// Exports: default, getGuildIdForGenericRedirect

// Module 4800 (useGuildIdForChannelRoute)
import initialize from "initialize" /* 504 */;
import FavoriteStore from "FavoriteStore" /* 2044 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4609 */;

require = fn;
const FAVORITES = fn(1074).FAVORITES;
const size = fn(2);
const result = size.fileFinishedImporting("modules/routing/useGuildIdForChannelRoute.tsx");

export default function useGuildIdForChannelRoute(getGuildId) {
  const items = [SelectedGuildStore];
  let stateFromStores = initialize.useStateFromStores(items, () => guildId.getGuildId());
  if (null == stateFromStores) {
    stateFromStores = getGuildId.getGuildId();
  }
  return stateFromStores;
};
export const getGuildIdForGenericRedirect = function getGuildIdForGenericRedirect(channel) {
  if (!obj.isFavoritesGuildId(SelectedGuildStore.getGuildId())) {
    let guildId = channel.getGuildId();
  } else if (FavoriteStore.isFavorite(channel.id)) {
    guildId = FAVORITES;
  }
  return guildId;
};
