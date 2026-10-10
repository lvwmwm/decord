// Module ID: 12556
// Function ID: 12557
// Name: useIsViewingPremiumMemberships
// Dependencies: [1085, 2072, 558, 576, 4957, 4950, 2]

// Module 12556 (useIsViewingPremiumMemberships)
import react from "react" /* 576 */;
import Constants from "Constants" /* 1085 */;
import ChannelConstants from "ChannelConstants" /* 2072 */;
import MemoryRouter from "MemoryRouter" /* 4950 */;
import RouteUtils from "RouteUtils" /* 4957 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const Routes = Constants.Routes;
const StaticChannelRoute = ChannelConstants.StaticChannelRoute;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useIsViewingPremiumMemberships() {
  let first;
  const obj = react;
  const cResult = obj.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const CHANNEL = Routes.CHANNEL;
    const RouteParam = tmp(4957).RouteParam;
    const CHANNELResult = CHANNEL(RouteParam.guildId(), StaticChannelRoute.ROLE_SUBSCRIPTIONS);
    cResult[0] = CHANNELResult;
    first = CHANNELResult;
  } else {
    first = cResult[0];
  }
  const tmpResult = MemoryRouter;
  return null != tmpResult.useRouteMatch(first);
}) : (function useIsViewingPremiumMemberships() {
  const useRouteMatch = MemoryRouter.useRouteMatch;
  const CHANNEL = Routes.CHANNEL;
  MemoryRouter;
  const RouteParam = RouteUtils.RouteParam;
  return null != useRouteMatch(CHANNEL(RouteParam.guildId(), StaticChannelRoute.ROLE_SUBSCRIPTIONS));
});
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/useIsViewingPremiumMemberships.tsx");

export default tmp2;
