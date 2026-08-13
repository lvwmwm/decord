// Module ID: 9601
// Function ID: 9602
// Name: navigateToLastChannel
// Dependencies: [4197, 9602, 4353, 2]
// Exports: default

// Module 9601 (navigateToLastChannel)
const result = require("transitionToChannel").fileFinishedImporting("modules/main_tabs_v2/native/navigateToLastChannel.tsx");

export default function navigateToLastChannel() {
  const coerceGuildsRouteResult = require(4197) /* coerceMainRoute */.coerceGuildsRoute(importDefault(9602)());
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
    require(4353) /* transitionToChannel */.transitionToChannel(channelId1);
    const tmpResult = require(4353) /* transitionToChannel */;
  }
};
