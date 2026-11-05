// Module ID: 14614
// Function ID: 14615
// Name: useIsViewingPremiumMemberships
// Dependencies: [1072, 4999, 5185, 5192, 2]
// Exports: default

// Module 14614 (useIsViewingPremiumMemberships)
import Constants from "Constants" /* 1072 */;
import ChannelConstants from "ChannelConstants" /* 4999 */;
import MemoryRouter from "MemoryRouter" /* 5185 */;
import RouteUtils from "RouteUtils" /* 5192 */;
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
