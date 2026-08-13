// Module ID: 4354
// Function ID: 4355
// Name: useGuildIdForChannelRoute
// Dependencies: [1394, 4165, 676, 589, 1913, 2]
// Exports: default, getGuildIdForGenericRedirect

// Module 4354 (useGuildIdForChannelRoute)
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
