// Module ID: 13058
// Function ID: 13059
// Name: useIsViewingPremiumMemberships
// Dependencies: [1074, 2048, 4620, 4627, 2]
// Exports: default

// Module 13058 (useIsViewingPremiumMemberships)
import Constants from "Constants" /* 1074 */;
import ChannelConstants from "ChannelConstants" /* 2048 */;
import _mod4620 from "module_4620" /* 4620 */;
import RouteUtils from "RouteUtils" /* 4627 */;
import size from "module_2" /* 2 */;

const Routes = Constants.Routes;
const StaticChannelRoute = ChannelConstants.StaticChannelRoute;
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/useIsViewingPremiumMemberships.tsx");

export default function useIsViewingPremiumMemberships() {
  const RouteParam = RouteUtils.RouteParam;
  return null != _mod4620.useRouteMatch(Routes.CHANNEL(RouteParam.guildId(), StaticChannelRoute.ROLE_SUBSCRIPTIONS));
};
