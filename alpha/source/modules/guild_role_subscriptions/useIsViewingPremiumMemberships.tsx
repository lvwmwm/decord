// Module ID: 12504
// Function ID: 12505
// Name: useIsViewingPremiumMemberships
// Dependencies: [1074, 2051, 4695, 4702, 2]
// Exports: default

// Module 12504 (useIsViewingPremiumMemberships)
import Constants from "Constants" /* 1074 */;
import ChannelConstants from "ChannelConstants" /* 2051 */;
import _mod4695 from "module_4695" /* 4695 */;
import RouteUtils from "RouteUtils" /* 4702 */;
import size from "module_2" /* 2 */;

const Routes = Constants.Routes;
const StaticChannelRoute = ChannelConstants.StaticChannelRoute;
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/useIsViewingPremiumMemberships.tsx");

export default function useIsViewingPremiumMemberships() {
  const RouteParam = RouteUtils.RouteParam;
  return null != _mod4695.useRouteMatch(Routes.CHANNEL(RouteParam.guildId(), StaticChannelRoute.ROLE_SUBSCRIPTIONS));
};
