// Module ID: 4841
// Function ID: 4842
// Name: useGuildIdForChannelRoute
// Dependencies: [2047, 4652, 1074, 504, 2069, 2]
// Exports: default, getGuildIdForGenericRedirect

// Module 4841 (useGuildIdForChannelRoute)
import initialize from "initialize" /* 504 */;
import FavoriteStore from "FavoriteStore" /* 2047 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4652 */;

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
