// Module ID: 15081
// Function ID: 15082
// Name: useGuildsRouteGuildId
// Dependencies: [1481, 2]
// Exports: default, useGuildsRouteGuildAndChannelId

// Module 15081 (useGuildsRouteGuildId)
const result = require("set").fileFinishedImporting("modules/main_tabs_v2/navigator/useGuildsRouteGuildId.tsx");

export default function useGuildsRouteGuildId() {
  const params = require(1481) /* createStandardNavigationFactories */.useRoute().params;
  let guildId;
  if (params != null) {
    guildId = params.guildId;
  }
  return guildId;
};
export const useGuildsRouteGuildAndChannelId = function useGuildsRouteGuildAndChannelId() {
  const route = require(1481) /* createStandardNavigationFactories */.useRoute();
  let guildId;
  if (route != null) {
    const params = route.params;
    if (params != null) {
      guildId = params.guildId;
    }
  }
  const items = [guildId, ];
  let channelId;
  if (route != null) {
    const params2 = route.params;
    if (params2 != null) {
      channelId = params2.channelId;
    }
  }
  items[1] = channelId;
  return items;
};
