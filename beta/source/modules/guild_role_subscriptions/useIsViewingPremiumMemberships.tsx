// Module ID: 12976
// Function ID: 12977
// Name: useIsViewingPremiumMemberships
// Dependencies: [1078, 2052, 558, 568, 4630, 4623, 2]

// Module 12976 (useIsViewingPremiumMemberships)
import c from "c" /* 568 */;
import Constants from "Constants" /* 1078 */;
import ChannelConstants from "ChannelConstants" /* 2052 */;
import _mod4623 from "module_4623" /* 4623 */;
import RouteUtils from "RouteUtils" /* 4630 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const Routes = Constants.Routes;
const StaticChannelRoute = ChannelConstants.StaticChannelRoute;
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/useIsViewingPremiumMemberships.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const RouteParam = tmp(4630).RouteParam;
    const CHANNELResult = Routes.CHANNEL(RouteParam.guildId(), StaticChannelRoute.ROLE_SUBSCRIPTIONS);
    cResult[0] = CHANNELResult;
    let first = CHANNELResult;
  } else {
    first = cResult[0];
  }
  return null != _mod4623.useRouteMatch(first);
}) : (() => {
  const RouteParam = RouteUtils.RouteParam;
  return null != _mod4623.useRouteMatch(Routes.CHANNEL(RouteParam.guildId(), StaticChannelRoute.ROLE_SUBSCRIPTIONS));
});
