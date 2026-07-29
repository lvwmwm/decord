// Module ID: 10926
// Function ID: 10927
// Name: navigateToLastChannel
// Dependencies: [4040, 10927, 4197, 2]
// Exports: default

// Module 10926 (navigateToLastChannel)
const result = require("transitionToChannel").fileFinishedImporting("modules/main_tabs_v2/native/navigateToLastChannel.tsx");

export default function navigateToLastChannel() {
  const coerceGuildsRouteResult = require(4040) /* navigationToRootTabHelper */.coerceGuildsRoute(importDefault(10927)());
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
    require(4197) /* transitionToChannel */.transitionToChannel(channelId1);
    const tmpResult = require(4197) /* transitionToChannel */;
  }
};
