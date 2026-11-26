// Module ID: 13752
// Function ID: 13753
// Name: conjureRouteRewriter
// Dependencies: [1071, 4769, 4964, 4951, 2]
// Exports: default

// Module 13752 (conjureRouteRewriter)
import Constants from "Constants" /* 1071 */;
import ChannelConstants from "ChannelConstants" /* 4769 */;
import matchPathCompat from "matchPathCompat" /* 4951 */;
import RouteUtils from "RouteUtils" /* 4964 */;
import size from "module_2" /* 2 */;

const Routes = Constants.Routes;
const StaticChannelRoute = ChannelConstants.StaticChannelRoute;
const CHANNEL = Routes.CHANNEL;
const RouteParam = RouteUtils.RouteParam;
const path = CHANNEL(RouteParam.guildId(), StaticChannelRoute.CONJURE, ":projectId?");
const result = size.fileFinishedImporting("modules/conjure/builder/native/conjureRouteRewriter.tsx");

export default function conjureRouteRewriter(pathname) {
  const obj = matchPathCompat;
  const obj2 = { path, exact: true };
  const matchPathResult = obj.matchPath(pathname.pathname, obj2);
  if (null == matchPathResult) {
    return null;
  } else {
    const params = matchPathResult.params;
    const obj3 = { path: Routes.CHANNEL(params.guildId, StaticChannelRoute.CONJURE_PROJECT, params.projectId), state: pathname.state };
    return obj3;
  }
};
