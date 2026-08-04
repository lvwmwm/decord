// Module ID: 4294
// Function ID: 4295
// Name: useGuildIdForChannelRoute
// Dependencies: [1375, 4102, 676, 589, 1865, 2]
// Exports: default, getGuildIdForGenericRedirect

// Module 4294 (useGuildIdForChannelRoute)
import initializeFromUserSettings from "initializeFromUserSettings";
import handleConnectionOpen from "handleConnectionOpen";
import { FAVORITES } from "ME";

const require = arg1;
const result = require("ME").fileFinishedImporting("modules/routing/useGuildIdForChannelRoute.tsx");

export default function useGuildIdForChannelRoute(getGuildId) {
  const items = [handleConnectionOpen];
  let stateFromStores = require(589) /* initialize */.useStateFromStores(items, () => guildId.getGuildId());
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
