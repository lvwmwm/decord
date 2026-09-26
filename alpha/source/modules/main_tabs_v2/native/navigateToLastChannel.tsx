// Module ID: 10787
// Function ID: 10788
// Name: navigateToLastChannel
// Dependencies: [4692, 10788, 4847, 2]
// Exports: default

// Module 10787 (navigateToLastChannel)
import NavigationRouteUtils from "NavigationRouteUtils" /* 4692 */;
import transitionToChannel from "transitionToChannel" /* 4847 */;
import getNavigatorCurrentRouteDefault from "getNavigatorCurrentRoute" /* 10788 */;
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
