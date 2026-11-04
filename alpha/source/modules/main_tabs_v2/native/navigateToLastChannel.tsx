// Module ID: 11693
// Function ID: 11694
// Name: navigateToLastChannel
// Dependencies: [5322, 11694, 5890, 2]
// Exports: default

// Module 11693 (navigateToLastChannel)
import NavigationRouteUtils from "NavigationRouteUtils" /* 5322 */;
import transitionToChannel2 from "transitionToChannel" /* 5890 */;
import getNavigatorCurrentRouteDefault from "getNavigatorCurrentRoute" /* 11694 */;
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
    const transitionToChannel = tmp(5890).transitionToChannel;
    transitionToChannel2;
    if (params2 != null) {
      channelId1 = params2.channelId;
    }
    transitionToChannel(channelId1);
  }
};
