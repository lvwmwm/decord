// Module ID: 12274
// Function ID: 12275
// Name: useIsViewingPremiumMemberships
// Dependencies: [1074, 2051, 4663, 4670, 2]
// Exports: default

// Module 12274 (useIsViewingPremiumMemberships)
import Constants from "Constants" /* 1074 */;
import ChannelConstants from "ChannelConstants" /* 2051 */;
import _mod4663 from "module_4663" /* 4663 */;
import RouteUtils from "RouteUtils" /* 4670 */;
import size from "module_2" /* 2 */;

const Routes = Constants.Routes;
const StaticChannelRoute = ChannelConstants.StaticChannelRoute;
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/useIsViewingPremiumMemberships.tsx");

export default function useIsViewingPremiumMemberships() {
  const RouteParam = RouteUtils.RouteParam;
  return null != _mod4663.useRouteMatch(Routes.CHANNEL(RouteParam.guildId(), StaticChannelRoute.ROLE_SUBSCRIPTIONS));
};
