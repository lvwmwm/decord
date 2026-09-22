// Module ID: 13033
// Function ID: 13034
// Name: useIsViewingPremiumMemberships
// Dependencies: [1074, 2049, 4589, 4596, 2]
// Exports: default

// Module 13033 (useIsViewingPremiumMemberships)
import Constants from "Constants" /* 1074 */;
import ChannelConstants from "ChannelConstants" /* 2049 */;
import _mod4589 from "module_4589" /* 4589 */;
import RouteUtils from "RouteUtils" /* 4596 */;
import size from "module_2" /* 2 */;

const Routes = Constants.Routes;
const StaticChannelRoute = ChannelConstants.StaticChannelRoute;
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/useIsViewingPremiumMemberships.tsx");

export default function useIsViewingPremiumMemberships() {
  const RouteParam = RouteUtils.RouteParam;
  return null != _mod4589.useRouteMatch(Routes.CHANNEL(RouteParam.guildId(), StaticChannelRoute.ROLE_SUBSCRIPTIONS));
};
