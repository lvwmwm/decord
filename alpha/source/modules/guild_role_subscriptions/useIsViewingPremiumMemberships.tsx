// Module ID: 13822
// Function ID: 13823
// Name: useIsViewingPremiumMemberships
// Dependencies: [1071, 4899, 5087, 5094, 2]
// Exports: default

// Module 13822 (useIsViewingPremiumMemberships)
import Constants from "Constants" /* 1071 */;
import ChannelConstants from "ChannelConstants" /* 4899 */;
import MemoryRouter from "MemoryRouter" /* 5087 */;
import RouteUtils from "RouteUtils" /* 5094 */;
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
