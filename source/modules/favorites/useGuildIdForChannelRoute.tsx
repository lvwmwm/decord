// Module ID: 4135
// Function ID: 34367
// Name: useGuildIdForChannelRoute
// Dependencies: []
// Exports: default, getGuildIdForGenericRedirect

// Module 4135 (useGuildIdForChannelRoute)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
const FAVORITES = arg1(dependencyMap[2]).FAVORITES;
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/favorites/useGuildIdForChannelRoute.tsx");

export default function useGuildIdForChannelRoute(getGuildId) {
  const items = [closure_2];
  let stateFromStores = arg1(dependencyMap[3]).useStateFromStores(items, () => guildId.getGuildId());
  if (null == stateFromStores) {
    stateFromStores = getGuildId.getGuildId();
  }
  return stateFromStores;
};
export const getGuildIdForGenericRedirect = function getGuildIdForGenericRedirect(channel) {
  if (guildId.getGuildId() !== FAVORITES) {
    let guildId = channel.getGuildId();
  } else if (closure_3.isFavorite(channel.id)) {
    guildId = FAVORITES;
  } else {
    guildId = channel.getGuildId();
  }
  return guildId;
};
