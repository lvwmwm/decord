// Module ID: 14675
// Function ID: 110650
// Name: useGuildsRouteGuildId
// Dependencies: []
// Exports: default, useGuildsRouteGuildAndChannelId

// Module 14675 (useGuildsRouteGuildId)
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/main_tabs_v2/navigator/useGuildsRouteGuildId.tsx");

export default function useGuildsRouteGuildId() {
  let guildId;
  const params = require(dependencyMap[0]).useRoute().params;
  if (null != params) {
    guildId = params.guildId;
  }
  return guildId;
};
export const useGuildsRouteGuildAndChannelId = function useGuildsRouteGuildAndChannelId() {
  const route = require(dependencyMap[0]).useRoute();
  let guildId;
  if (null != route) {
    const params = route.params;
    if (null != params) {
      guildId = params.guildId;
    }
  }
  const items = [guildId, ];
  let channelId;
  if (null != route) {
    const params2 = route.params;
    if (null != params2) {
      channelId = params2.channelId;
    }
  }
  items[1] = channelId;
  return items;
};
