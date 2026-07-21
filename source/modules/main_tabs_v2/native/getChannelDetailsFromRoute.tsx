// Module ID: 13359
// Function ID: 101618
// Name: getChannelDetailsFromRoute
// Dependencies: []
// Exports: default

// Module 13359 (getChannelDetailsFromRoute)
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/main_tabs_v2/native/getChannelDetailsFromRoute.tsx");

export default function getChannelDetailsFromRoute(currentRoute) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  const coerceChannelRouteResult = require(dependencyMap[0]).coerceChannelRoute(currentRoute);
  if (null != coerceChannelRouteResult) {
    const items = [coerceChannelRouteResult.params.guildId, coerceChannelRouteResult.params.channelId];
    return items;
  } else if (flag) {
    const coerceGuildsRouteResult = require(dependencyMap[0]).coerceGuildsRoute(currentRoute);
    if (null != coerceGuildsRouteResult) {
      const params = coerceGuildsRouteResult.params;
      let guildId;
      if (null != params) {
        guildId = params.guildId;
      }
      const items1 = [guildId, ];
      const params2 = coerceGuildsRouteResult.params;
      let channelId;
      if (null != params2) {
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
  const obj = require(dependencyMap[0]);
};
