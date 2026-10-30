// Module ID: 14336
// Function ID: 14337
// Name: useIsViewingPremiumMemberships
// Dependencies: [1072, 4865, 5051, 5058, 2]
// Exports: default

// Module 14336 (useIsViewingPremiumMemberships)
import Constants from "Constants" /* 1072 */;
import ChannelConstants from "ChannelConstants" /* 4865 */;
import MemoryRouter from "MemoryRouter" /* 5051 */;
import RouteUtils from "RouteUtils" /* 5058 */;
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
