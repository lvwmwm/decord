// Module ID: 10886
// Function ID: 84635
// Name: navigateToLastChannel
// Dependencies: [3981, 10887, 4138, 2]
// Exports: default

// Module 10886 (navigateToLastChannel)
const result = require("transitionToChannel").fileFinishedImporting("modules/main_tabs_v2/native/navigateToLastChannel.tsx");

export default function navigateToLastChannel() {
  const coerceGuildsRouteResult = require(3981) /* _createForOfIteratorHelperLoose */.coerceGuildsRoute(importDefault(10887)());
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
    require(4138) /* transitionToChannel */.transitionToChannel(channelId1);
    const obj2 = require(4138) /* transitionToChannel */;
  }
};
