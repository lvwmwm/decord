// Module ID: 9069
// Function ID: 9070
// Name: navigateToLastChannel
// Dependencies: [4332, 9070, 4489, 2]
// Exports: default

// Module 9069 (navigateToLastChannel)
import set from "set" /* 2 */;
import coerceMainRoute from "coerceMainRoute" /* 4332 */;
import transitionToChannel from "transitionToChannel" /* 4489 */;
import getNavigatorCurrentRouteDefault from "getNavigatorCurrentRoute" /* 9070 */;

const result = set.fileFinishedImporting("modules/main_tabs_v2/native/navigateToLastChannel.tsx");

export default function navigateToLastChannel() {
  const coerceGuildsRouteResult = coerceMainRoute.coerceGuildsRoute(getNavigatorCurrentRouteDefault());
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
    transitionToChannel.transitionToChannel(channelId1);
    const tmpResult = transitionToChannel;
  }
};
