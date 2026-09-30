// Module ID: 12493
// Function ID: 12494
// Name: useIsViewingPremiumMemberships
// Dependencies: [1074, 2052, 4696, 4703, 2]
// Exports: default

// Module 12493 (useIsViewingPremiumMemberships)
import Constants from "Constants" /* 1074 */;
import ChannelConstants from "ChannelConstants" /* 2052 */;
import _mod4696 from "module_4696" /* 4696 */;
import RouteUtils from "RouteUtils" /* 4703 */;
import size from "module_2" /* 2 */;

const Routes = Constants.Routes;
const StaticChannelRoute = ChannelConstants.StaticChannelRoute;
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/useIsViewingPremiumMemberships.tsx");

export default function useIsViewingPremiumMemberships() {
  const RouteParam = RouteUtils.RouteParam;
  return null != _mod4696.useRouteMatch(Routes.CHANNEL(RouteParam.guildId(), StaticChannelRoute.ROLE_SUBSCRIPTIONS));
};
