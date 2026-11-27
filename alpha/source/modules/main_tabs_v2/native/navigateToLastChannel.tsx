// Module ID: 12155
// Function ID: 12156
// Name: navigateToLastChannel
// Dependencies: [5219, 12156, 6126, 2]
// Exports: default

// Module 12155 (navigateToLastChannel)
import NavigationRouteUtils from "NavigationRouteUtils" /* 5219 */;
import transitionToChannel2 from "transitionToChannel" /* 6126 */;
import getNavigatorCurrentRouteDefault from "getNavigatorCurrentRoute" /* 12156 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/main_tabs_v2/native/navigateToLastChannel.tsx");

export default function navigateToLastChannel() {
  const obj = NavigationRouteUtils;
  const coerceGuildsRouteResult = obj.coerceGuildsRoute(getNavigatorCurrentRouteDefault());
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
    const transitionToChannel = tmp(6126).transitionToChannel;
    transitionToChannel2;
    if (params2 != null) {
      channelId1 = params2.channelId;
    }
    transitionToChannel(channelId1);
  }
};
