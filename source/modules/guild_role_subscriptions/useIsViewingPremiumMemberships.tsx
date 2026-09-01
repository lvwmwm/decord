// Module ID: 12314
// Function ID: 12315
// Name: useIsViewingPremiumMemberships
// Dependencies: [676, 1394, 4310, 4317, 2]
// Exports: default

// Module 12314 (useIsViewingPremiumMemberships)
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;
import set2 from "set" /* 1394 */;
import _extends from "_extends" /* 4310 */;
import RouteParam2 from "RouteParam" /* 4317 */;

const Routes = ME.Routes;
const StaticChannelRoute = set2.StaticChannelRoute;
const result = set.fileFinishedImporting("modules/guild_role_subscriptions/useIsViewingPremiumMemberships.tsx");

export default function useIsViewingPremiumMemberships() {
  const RouteParam = RouteParam2.RouteParam;
  return null != _extends.useRouteMatch(Routes.CHANNEL(RouteParam.guildId(), StaticChannelRoute.ROLE_SUBSCRIPTIONS));
};
