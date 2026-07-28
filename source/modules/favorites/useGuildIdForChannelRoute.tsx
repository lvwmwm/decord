// Module ID: 4174
// Function ID: 34514
// Name: useGuildIdForChannelRoute
// Dependencies: [3982, 1351, 653, 566, 1841, 2]
// Exports: default, getGuildIdForGenericRedirect

// Module 4174 (useGuildIdForChannelRoute)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_3 from "_isNativeReflectConstruct";
import { FAVORITES } from "ME";

const require = arg1;
const result = require("ME").fileFinishedImporting("modules/favorites/useGuildIdForChannelRoute.tsx");

export default function useGuildIdForChannelRoute(getGuildId) {
  const items = [_isNativeReflectConstruct];
  let stateFromStores = require(566) /* initialize */.useStateFromStores(items, () => outer1_2.getGuildId());
  if (null == stateFromStores) {
    stateFromStores = getGuildId.getGuildId();
  }
  return stateFromStores;
};
export const getGuildIdForGenericRedirect = function getGuildIdForGenericRedirect(channel) {
  if (!obj.isFavoritesGuildId(guildId.getGuildId())) {
    guildId = channel.getGuildId();
  } else if (closure_3.isFavorite(channel.id)) {
    guildId = FAVORITES;
  }
  return guildId;
};
