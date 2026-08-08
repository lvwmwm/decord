// Module ID: 9551
// Function ID: 9552
// Name: navigateToLastChannel
// Dependencies: [4158, 9552, 4311, 2]
// Exports: default

// Module 9551 (navigateToLastChannel)
const result = require("transitionToChannel").fileFinishedImporting("modules/main_tabs_v2/native/navigateToLastChannel.tsx");

export default function navigateToLastChannel() {
  const coerceGuildsRouteResult = require(4158) /* navigationToRootTabHelper */.coerceGuildsRoute(importDefault(9552)());
  let tmp4 = null != coerceGuildsRouteResult;
  if (tmp4) {
    const params = coerceGuildsRouteResult.params;
    let channelId;
    if (params != null) {
      channelId = params.channelId;
    }
    tmp4 = null != channelId;
  }
  if (tmp4) {
    const params2 = coerceGuildsRouteResult.params;
    let channelId1;
    if (params2 != null) {
      channelId1 = params2.channelId;
    }
    require(4311) /* transitionToChannel */.transitionToChannel(channelId1);
    const tmpResult = require(4311) /* transitionToChannel */;
  }
};
