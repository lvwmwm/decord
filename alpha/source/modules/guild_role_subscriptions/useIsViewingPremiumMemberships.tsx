// Module ID: 14601
// Function ID: 14602
// Name: useIsViewingPremiumMemberships
// Dependencies: [1072, 4997, 5183, 5190, 2]
// Exports: default

// Module 14601 (useIsViewingPremiumMemberships)
import Constants from "Constants" /* 1072 */;
import ChannelConstants from "ChannelConstants" /* 4997 */;
import MemoryRouter from "MemoryRouter" /* 5183 */;
import RouteUtils from "RouteUtils" /* 5190 */;
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
