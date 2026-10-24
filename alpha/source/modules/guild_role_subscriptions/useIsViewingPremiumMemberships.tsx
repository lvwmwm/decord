// Module ID: 13733
// Function ID: 13734
// Name: useIsViewingPremiumMemberships
// Dependencies: [1087, 4830, 558, 576, 5020, 5013, 2]

// Module 13733 (useIsViewingPremiumMemberships)
import react from "react" /* 576 */;
import Constants from "Constants" /* 1087 */;
import ChannelConstants from "ChannelConstants" /* 4830 */;
import MemoryRouter from "MemoryRouter" /* 5013 */;
import RouteUtils from "RouteUtils" /* 5020 */;
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
    const RouteParam = tmp(5020).RouteParam;
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
