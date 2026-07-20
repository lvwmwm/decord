// Module ID: 10869
// Function ID: 84539
// Name: navigateToLastChannel
// Dependencies: []
// Exports: default

// Module 10869 (navigateToLastChannel)
const _module = require(dependencyMap[3]);
const result = _module.fileFinishedImporting("modules/main_tabs_v2/native/navigateToLastChannel.tsx");

export default function navigateToLastChannel() {
  const coerceGuildsRouteResult = require(dependencyMap[0]).coerceGuildsRoute(importDefault(dependencyMap[1])());
  let tmp2 = null != coerceGuildsRouteResult;
  if (tmp2) {
    const params = coerceGuildsRouteResult.params;
    let channelId;
    if (null != params) {
      channelId = params.channelId;
    }
    tmp2 = null != channelId;
  }
  if (tmp2) {
    const params2 = coerceGuildsRouteResult.params;
    let channelId1;
    if (null != params2) {
      channelId1 = params2.channelId;
    }
    require(dependencyMap[2]).transitionToChannel(channelId1);
    const obj2 = require(dependencyMap[2]);
  }
};
