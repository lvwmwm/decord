// Module ID: 12190
// Function ID: 12191
// Name: useIsViewingPremiumMemberships
// Dependencies: [676, 1398, 4176, 4183, 2]
// Exports: default

// Module 12190 (useIsViewingPremiumMemberships)
import { Routes } from "ME";
import { StaticChannelRoute } from "set";

const result = require("_extends").fileFinishedImporting("modules/guild_role_subscriptions/useIsViewingPremiumMemberships.tsx");

export default function useIsViewingPremiumMemberships() {
  const RouteParam = require(4183) /* RouteParam */.RouteParam;
  return null != require(4176) /* _extends */.useRouteMatch(Routes.CHANNEL(RouteParam.guildId(), StaticChannelRoute.ROLE_SUBSCRIPTIONS));
};
