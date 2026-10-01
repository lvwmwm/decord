// Module ID: 15651
// Function ID: 15652
// Name: useGuildsRouteGuildId
// Dependencies: [1486, 2]
// Exports: default, useGuildsRouteGuildAndChannelId

// Module 15651 (useGuildsRouteGuildId)
import Link from "Link" /* 1486 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/main_tabs_v2/navigator/useGuildsRouteGuildId.tsx");

export default function useGuildsRouteGuildId() {
  const obj = Link;
  const params = obj.useRoute().params;
  let guildId;
  if (params != null) {
    guildId = params.guildId;
  }
  return guildId;
};
export const useGuildsRouteGuildAndChannelId = function useGuildsRouteGuildAndChannelId() {
  const obj = Link;
  const route = obj.useRoute();
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
