// Module ID: 10902
// Function ID: 84540
// Name: navigateToLastChannel
// Dependencies: [4016, 10903, 4173, 2]
// Exports: default

// Module 10902 (navigateToLastChannel)
const result = require("transitionToChannel").fileFinishedImporting("modules/main_tabs_v2/native/navigateToLastChannel.tsx");

export default function navigateToLastChannel() {
  const coerceGuildsRouteResult = require(4016) /* _createForOfIteratorHelperLoose */.coerceGuildsRoute(importDefault(10903)());
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
    require(4173) /* transitionToChannel */.transitionToChannel(channelId1);
    const obj2 = require(4173) /* transitionToChannel */;
  }
};
