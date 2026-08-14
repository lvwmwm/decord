// Module ID: 13891
// Function ID: 13892
// Name: getChannelDetailsFromRoute
// Dependencies: [4197, 2]
// Exports: default

// Module 13891 (getChannelDetailsFromRoute)
const result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/getChannelDetailsFromRoute.tsx");

export default function getChannelDetailsFromRoute(currentRoute) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  const coerceChannelRouteResult = require(4197) /* coerceMainRoute */.coerceChannelRoute(currentRoute);
  if (null != coerceChannelRouteResult) {
    const items = [coerceChannelRouteResult.params.guildId, coerceChannelRouteResult.params.channelId];
    return items;
  } else if (flag) {
    const coerceGuildsRouteResult = tmp(4197).coerceGuildsRoute(currentRoute);
    if (null != coerceGuildsRouteResult) {
      const params = coerceGuildsRouteResult.params;
      let guildId;
      if (params != null) {
        guildId = params.guildId;
      }
      const items1 = [guildId, ];
      const params2 = coerceGuildsRouteResult.params;
      let channelId;
      if (params2 != null) {
        channelId = params2.channelId;
      }
      items1[1] = channelId;
      let items2 = items1;
    } else {
      items2 = [undefined, undefined];
    }
    return items2;
  } else {
    const items3 = [undefined, undefined];
    return items3;
  }
  const obj = require(4197) /* coerceMainRoute */;
  tmp = require;
};
