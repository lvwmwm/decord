// Module ID: 11988
// Function ID: 11989
// Name: navigateToLastChannel
// Dependencies: [4970, 11989, 5527, 2]
// Exports: default

// Module 11988 (navigateToLastChannel)
import NavigationRouteUtils from "NavigationRouteUtils" /* 4970 */;
import transitionToChannel2 from "transitionToChannel" /* 5527 */;
import getNavigatorCurrentRouteDefault from "getNavigatorCurrentRoute" /* 11989 */;
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
    const transitionToChannel = tmp(5527).transitionToChannel;
    transitionToChannel2;
    if (params2 != null) {
      channelId1 = params2.channelId;
    }
    transitionToChannel(channelId1);
  }
};
