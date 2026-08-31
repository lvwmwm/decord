// Module ID: 12281
// Function ID: 12282
// Name: useIsViewingPremiumMemberships
// Dependencies: [676, 1394, 4280, 4287, 2]
// Exports: default

// Module 12281 (useIsViewingPremiumMemberships)
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;
import set2 from "set" /* 1394 */;
import _extends from "_extends" /* 4280 */;
import RouteParam2 from "RouteParam" /* 4287 */;

const Routes = ME.Routes;
const StaticChannelRoute = set2.StaticChannelRoute;
const result = set.fileFinishedImporting("modules/guild_role_subscriptions/useIsViewingPremiumMemberships.tsx");

export default function useIsViewingPremiumMemberships() {
  const RouteParam = RouteParam2.RouteParam;
  return null != _extends.useRouteMatch(Routes.CHANNEL(RouteParam.guildId(), StaticChannelRoute.ROLE_SUBSCRIPTIONS));
};
