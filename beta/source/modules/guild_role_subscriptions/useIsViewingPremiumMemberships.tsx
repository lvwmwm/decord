// Module ID: 12940
// Function ID: 12941
// Name: useIsViewingPremiumMemberships
// Dependencies: [1078, 2052, 558, 568, 4598, 4591, 2]

// Module 12940 (useIsViewingPremiumMemberships)
import c from "c" /* 568 */;
import Constants from "Constants" /* 1078 */;
import ChannelConstants from "ChannelConstants" /* 2052 */;
import _mod4591 from "module_4591" /* 4591 */;
import RouteUtils from "RouteUtils" /* 4598 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const Routes = Constants.Routes;
const StaticChannelRoute = ChannelConstants.StaticChannelRoute;
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/useIsViewingPremiumMemberships.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const RouteParam = tmp(4598).RouteParam;
    const CHANNELResult = Routes.CHANNEL(RouteParam.guildId(), StaticChannelRoute.ROLE_SUBSCRIPTIONS);
    cResult[0] = CHANNELResult;
    let first = CHANNELResult;
  } else {
    first = cResult[0];
  }
  return null != _mod4591.useRouteMatch(first);
}) : (() => {
  const RouteParam = RouteUtils.RouteParam;
  return null != _mod4591.useRouteMatch(Routes.CHANNEL(RouteParam.guildId(), StaticChannelRoute.ROLE_SUBSCRIPTIONS));
});
