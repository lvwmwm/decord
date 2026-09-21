// Module ID: 13029
// Function ID: 13030
// Name: useIsViewingPremiumMemberships
// Dependencies: [1074, 2048, 4588, 4595, 2]
// Exports: default

// Module 13029 (useIsViewingPremiumMemberships)
import Constants from "Constants" /* 1074 */;
import ChannelConstants from "ChannelConstants" /* 2048 */;
import _mod4588 from "module_4588" /* 4588 */;
import RouteUtils from "RouteUtils" /* 4595 */;
import size from "module_2" /* 2 */;

const Routes = Constants.Routes;
const StaticChannelRoute = ChannelConstants.StaticChannelRoute;
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/useIsViewingPremiumMemberships.tsx");

export default function useIsViewingPremiumMemberships() {
  const RouteParam = RouteUtils.RouteParam;
  return null != _mod4588.useRouteMatch(Routes.CHANNEL(RouteParam.guildId(), StaticChannelRoute.ROLE_SUBSCRIPTIONS));
};
