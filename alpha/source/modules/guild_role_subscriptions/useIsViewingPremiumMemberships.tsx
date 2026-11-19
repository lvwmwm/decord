// Module ID: 13640
// Function ID: 13641
// Name: useIsViewingPremiumMemberships
// Dependencies: [1072, 4648, 4836, 4843, 2]
// Exports: default

// Module 13640 (useIsViewingPremiumMemberships)
import Constants from "Constants" /* 1072 */;
import ChannelConstants from "ChannelConstants" /* 4648 */;
import MemoryRouter from "MemoryRouter" /* 4836 */;
import RouteUtils from "RouteUtils" /* 4843 */;
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
