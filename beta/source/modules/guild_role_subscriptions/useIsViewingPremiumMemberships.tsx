// Module ID: 13730
// Function ID: 13731
// Name: useIsViewingPremiumMemberships
// Dependencies: [1071, 4769, 4957, 4964, 2]
// Exports: default

// Module 13730 (useIsViewingPremiumMemberships)
import Constants from "Constants" /* 1071 */;
import ChannelConstants from "ChannelConstants" /* 4769 */;
import MemoryRouter from "MemoryRouter" /* 4957 */;
import RouteUtils from "RouteUtils" /* 4964 */;
import size from "module_2" /* 2 */;

const Routes = Constants.Routes;
const StaticChannelRoute = ChannelConstants.StaticChannelRoute;
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/useIsViewingPremiumMemberships.tsx");

export default function useIsViewingPremiumMemberships() {
  const useRouteMatch = MemoryRouter.useRouteMatch;
  const CHANNEL = Routes.CHANNEL;
  MemoryRouter;
  const RouteParam = RouteUtils.RouteParam;
  return null != useRouteMatch(CHANNEL(RouteParam.guildId(), StaticChannelRoute.ROLE_SUBSCRIPTIONS));
};
