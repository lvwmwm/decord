// Module ID: 14848
// Function ID: 113210
// Name: useGuildsRouteGuildId
// Dependencies: [1457, 2]
// Exports: default, useGuildsRouteGuildAndChannelId

// Module 14848 (useGuildsRouteGuildId)
const result = require("set").fileFinishedImporting("modules/main_tabs_v2/navigator/useGuildsRouteGuildId.tsx");

export default function useGuildsRouteGuildId() {
  let guildId;
  const params = require(1457) /* Link */.useRoute().params;
  if (null != params) {
    guildId = params.guildId;
  }
  return guildId;
};
export const useGuildsRouteGuildAndChannelId = function useGuildsRouteGuildAndChannelId() {
  const route = require(1457) /* Link */.useRoute();
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
