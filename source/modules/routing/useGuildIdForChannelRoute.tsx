// Module ID: 4493
// Function ID: 4494
// Name: useGuildIdForChannelRoute
// Dependencies: [1389, 4302, 673, 586, 1911, 2]
// Exports: default, getGuildIdForGenericRedirect

// Module 4493 (useGuildIdForChannelRoute)
import initialize from "initialize" /* 586 */;
import closure_2 from "initializeFromUserSettings" /* 1389 */;
import closure_3 from "handleConnectionOpen" /* 4302 */;
import { FAVORITES } from "ME" /* 673 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/routing/useGuildIdForChannelRoute.tsx");

export default function useGuildIdForChannelRoute(getGuildId) {
  const items = [closure_3];
  let stateFromStores = initialize.useStateFromStores(items, () => guildId.getGuildId());
  if (null == stateFromStores) {
    stateFromStores = getGuildId.getGuildId();
  }
  return stateFromStores;
};
export const getGuildIdForGenericRedirect = function getGuildIdForGenericRedirect(channel) {
  if (!obj.isFavoritesGuildId(guildId.getGuildId())) {
    guildId = channel.getGuildId();
  } else {
    if (favorite.isFavorite(channel.id)) {
      guildId = FAVORITES;
    }
    const obj2 = favorite;
  }
  return guildId;
};
