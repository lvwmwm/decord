// Module ID: 12040
// Function ID: 12041
// Name: useIsViewingPremiumMemberships
// Dependencies: [676, 1379, 4113, 4120, 2]
// Exports: default

// Module 12040 (useIsViewingPremiumMemberships)
import { Routes } from "ME";
import { StaticChannelRoute } from "set";

const result = require("_extends").fileFinishedImporting("modules/guild_role_subscriptions/useIsViewingPremiumMemberships.tsx");

export default function useIsViewingPremiumMemberships() {
  const RouteParam = require(4120) /* RouteParam */.RouteParam;
  return null != require(4113) /* _extends */.useRouteMatch(Routes.CHANNEL(RouteParam.guildId(), StaticChannelRoute.ROLE_SUBSCRIPTIONS));
};
