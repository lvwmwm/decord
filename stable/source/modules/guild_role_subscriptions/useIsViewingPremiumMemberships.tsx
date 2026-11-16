// Module ID: 14654
// Function ID: 14655
// Name: useIsViewingPremiumMemberships
// Dependencies: [1072, 5026, 5214, 5221, 2]
// Exports: default

// Module 14654 (useIsViewingPremiumMemberships)
import Constants from "Constants" /* 1072 */;
import ChannelConstants from "ChannelConstants" /* 5026 */;
import MemoryRouter from "MemoryRouter" /* 5214 */;
import RouteUtils from "RouteUtils" /* 5221 */;
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
