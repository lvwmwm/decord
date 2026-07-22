// Module ID: 11797
// Function ID: 91577
// Name: useIsViewingPremiumMemberships
// Dependencies: []
// Exports: default

// Module 11797 (useIsViewingPremiumMemberships)
const Routes = require(dependencyMap[0]).Routes;
const StaticChannelRoute = require(dependencyMap[1]).StaticChannelRoute;
const _module = require(dependencyMap[4]);
const result = _module.fileFinishedImporting("modules/guild_role_subscriptions/useIsViewingPremiumMemberships.tsx");

export default function useIsViewingPremiumMemberships() {
  const RouteParam = require(dependencyMap[3]).RouteParam;
  return null != require(dependencyMap[2]).useRouteMatch(Routes.CHANNEL(RouteParam.guildId(), StaticChannelRoute.ROLE_SUBSCRIPTIONS));
};
