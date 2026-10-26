// Module ID: 11171
// Function ID: 11172
// Name: navigateToLastChannel
// Dependencies: [5150, 11172, 5707, 2]
// Exports: default

// Module 11171 (navigateToLastChannel)
import NavigationRouteUtils from "NavigationRouteUtils" /* 5150 */;
import transitionToChannel2 from "transitionToChannel" /* 5707 */;
import getNavigatorCurrentRouteDefault from "getNavigatorCurrentRoute" /* 11172 */;
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
    const transitionToChannel = tmp(5707).transitionToChannel;
    transitionToChannel2;
    if (params2 != null) {
      channelId1 = params2.channelId;
    }
    transitionToChannel(channelId1);
  }
};
