// Module ID: 11507
// Function ID: 11508
// Name: navigateToLastChannel
// Dependencies: [4648, 11508, 4801, 2]
// Exports: default

// Module 11507 (navigateToLastChannel)
import NavigationRouteUtils from "NavigationRouteUtils" /* 4648 */;
import transitionToChannel from "transitionToChannel" /* 4801 */;
import getNavigatorCurrentRouteDefault from "getNavigatorCurrentRoute" /* 11508 */;
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
