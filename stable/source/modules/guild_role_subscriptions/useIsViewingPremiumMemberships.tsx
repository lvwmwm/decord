// Module ID: 12909
// Function ID: 12910
// Name: useIsViewingPremiumMemberships
// Dependencies: [1074, 1964, 4469, 4476, 2]
// Exports: default

// Module 12909 (useIsViewingPremiumMemberships)
import Constants from "Constants" /* 1074 */;
import ChannelConstants from "ChannelConstants" /* 1964 */;
import _mod4469 from "module_4469" /* 4469 */;
import RouteUtils from "RouteUtils" /* 4476 */;
import size from "module_2" /* 2 */;

const Routes = Constants.Routes;
const StaticChannelRoute = ChannelConstants.StaticChannelRoute;
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/useIsViewingPremiumMemberships.tsx");

export default function useIsViewingPremiumMemberships() {
  const RouteParam = RouteUtils.RouteParam;
  return null != _mod4469.useRouteMatch(Routes.CHANNEL(RouteParam.guildId(), StaticChannelRoute.ROLE_SUBSCRIPTIONS));
};
