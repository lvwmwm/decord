// Module ID: 13115
// Function ID: 13116
// Name: useIsViewingPremiumMemberships
// Dependencies: [1074, 2049, 4659, 4666, 2]
// Exports: default

// Module 13115 (useIsViewingPremiumMemberships)
import Constants from "Constants" /* 1074 */;
import ChannelConstants from "ChannelConstants" /* 2049 */;
import _mod4659 from "module_4659" /* 4659 */;
import RouteUtils from "RouteUtils" /* 4666 */;
import size from "module_2" /* 2 */;

const Routes = Constants.Routes;
const StaticChannelRoute = ChannelConstants.StaticChannelRoute;
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/useIsViewingPremiumMemberships.tsx");

export default function useIsViewingPremiumMemberships() {
  const RouteParam = RouteUtils.RouteParam;
  return null != _mod4659.useRouteMatch(Routes.CHANNEL(RouteParam.guildId(), StaticChannelRoute.ROLE_SUBSCRIPTIONS));
};
