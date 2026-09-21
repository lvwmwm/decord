// Module ID: 11471
// Function ID: 11472
// Name: navigateToLastChannel
// Dependencies: [4616, 11472, 4769, 2]
// Exports: default

// Module 11471 (navigateToLastChannel)
import NavigationRouteUtils from "NavigationRouteUtils" /* 4616 */;
import transitionToChannel from "transitionToChannel" /* 4769 */;
import getNavigatorCurrentRouteDefault from "getNavigatorCurrentRoute" /* 11472 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/main_tabs_v2/native/navigateToLastChannel.tsx");

export default function navigateToLastChannel() {
  const coerceGuildsRouteResult = NavigationRouteUtils.coerceGuildsRoute(getNavigatorCurrentRouteDefault());
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
