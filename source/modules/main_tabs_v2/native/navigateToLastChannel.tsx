// Module ID: 9486
// Function ID: 9487
// Name: navigateToLastChannel
// Dependencies: [4152, 9487, 4310, 2]
// Exports: default

// Module 9486 (navigateToLastChannel)
const result = require("transitionToChannel").fileFinishedImporting("modules/main_tabs_v2/native/navigateToLastChannel.tsx");

export default function navigateToLastChannel() {
  const coerceGuildsRouteResult = require(4152) /* navigationToRootTabHelper */.coerceGuildsRoute(importDefault(9487)());
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
    require(4310) /* transitionToChannel */.transitionToChannel(channelId1);
    const tmpResult = require(4310) /* transitionToChannel */;
  }
};
