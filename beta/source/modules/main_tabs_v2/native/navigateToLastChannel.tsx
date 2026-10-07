// Module ID: 10996
// Function ID: 10997
// Name: navigateToLastChannel
// Dependencies: [4736, 10997, 4901, 2]
// Exports: default

// Module 10996 (navigateToLastChannel)
import NavigationRouteUtils from "NavigationRouteUtils" /* 4736 */;
import transitionToChannel2 from "transitionToChannel" /* 4901 */;
import getNavigatorCurrentRouteDefault from "getNavigatorCurrentRoute" /* 10997 */;
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
    const transitionToChannel = tmp(4901).transitionToChannel;
    transitionToChannel2;
    if (params2 != null) {
      channelId1 = params2.channelId;
    }
    transitionToChannel(channelId1);
  }
};
