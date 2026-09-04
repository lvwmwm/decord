// Module ID: 12708
// Function ID: 12709
// Name: useIsViewingPremiumMemberships
// Dependencies: [673, 1393, 4313, 4320, 2]
// Exports: default

// Module 12708 (useIsViewingPremiumMemberships)
import set from "set" /* 2 */;
import ME from "ME" /* 673 */;
import set2 from "set" /* 1393 */;
import _extends from "_extends" /* 4313 */;
import RouteParam2 from "RouteParam" /* 4320 */;

const Routes = ME.Routes;
const StaticChannelRoute = set2.StaticChannelRoute;
const result = set.fileFinishedImporting("modules/guild_role_subscriptions/useIsViewingPremiumMemberships.tsx");

export default function useIsViewingPremiumMemberships() {
  const RouteParam = RouteParam2.RouteParam;
  return null != _extends.useRouteMatch(Routes.CHANNEL(RouteParam.guildId(), StaticChannelRoute.ROLE_SUBSCRIPTIONS));
};
